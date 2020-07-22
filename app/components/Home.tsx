import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import MainApp from './MainApp';
import Login from './Login';
import { refresh } from '../JotForm';

export default function Home(): JSX.Element {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    refresh();
  }, [apiKey]);

  async function handleLogin(e: {
    target: {
      dataset: {
        username: React.SetStateAction<string>;
        password: React.SetStateAction<string>;
      };
    };
  }) {
    // console.log(e.target.dataset.username);
    // console.log(e.target.dataset.password);
    const url = 'https://api.jotform.com/user/login';
    const otherParams = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: `username=${e.target.dataset.username}&password=${e.target.dataset.password}&appName=JotForm Kiosk&access=readOnly`,
    };
    fetch(url, otherParams)
      .then((dataIn) => dataIn.json())
      .then(async (response) => {
        console.log(response);
        setApiKey(response.content.appKey);
        return ipcRenderer.invoke(
          'setStoreValue',
          'apiKey',
          response.content.appKey
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleLogout() {
    setApiKey('');
    await ipcRenderer.invoke('deleteStoreValue', 'apiKey');
  }

  // add use effect to tie apiKey storage and useState
  ipcRenderer
    .invoke('getStoreValue', 'apiKey')
    .then((response) => setApiKey(response))
    .catch((error) => console.log(error));
  console.log(`apiKey is ${apiKey}`);
  if (apiKey) return <MainApp onLogout={handleLogout} />;
  return <Login onLogin={handleLogin} />;
}
