import { ipcRenderer } from 'electron';

const JF = require('jotform');

let key;

ipcRenderer
  .invoke('getStoreValue', 'apiKey')
  .then((response) => {
    JF.options({
      debug: true,
      apiKey: response,
    });
    return true;
  })
  .catch((error) => console.log(error));

export default JF;
