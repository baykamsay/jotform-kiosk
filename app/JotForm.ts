import { ipcRenderer } from 'electron';

const JF = require('jotform');

// const key = ipcRenderer.invoke('getStoreValue', 'apiKey');
// console.log(`The key is: ${key}`);

JF.options({
  debug: true,
  apiKey: '146eb8788557f75bc37ae09acb',
});

export default JF;
