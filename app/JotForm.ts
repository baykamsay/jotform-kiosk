import { ipcRenderer } from 'electron';

const JF = require('jotform');

export function refresh() {
  ipcRenderer
    .invoke('getStoreValue', 'apiKey')
    .then((response) => {
      if (response) {
        JF.options({
          debug: true,
          apiKey: response,
        });
        return true;
      }
      return false;
    })
    .catch((error) => console.log(`Oh noo: ${error}`));
}

refresh();

export default JF;
