import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { message } from 'antd';
import MainApp from './MainApp';
import Login from './Login';
import { refresh } from '../JotForm';

export default function Home(): JSX.Element {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    refresh();
  }, [apiKey]);

  async function handleLogin(values: { username: string; password: string }) {
    const url = 'https://api.jotform.com/user/login';
    const otherParams = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: `username=${values.username}&password=${values.password}&appName=JotForm Kiosk&access=readOnly`,
    };
    fetch(url, otherParams)
      .then((dataIn) => dataIn.json())
      .then(async (response) => {
        setApiKey(response.content.appKey);
        await ipcRenderer.invoke(
          'setStoreValue',
          'apiKey',
          response.content.appKey
        );
        return ipcRenderer.invoke('reload');
      })
      .catch(() => {
        message.error('Error logging in, please check your password!');
      });
  }

  async function handleLogout() {
    setApiKey('');
    await ipcRenderer.invoke('deleteStoreValue', 'apiKey');
  }

  ipcRenderer
    .invoke('getStoreValue', 'apiKey')
    .then((response) => setApiKey(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
  if (apiKey) {
    return <MainApp onLogout={handleLogout} key={apiKey} />;
  }
  return <Login onLogin={handleLogin} />;
}
