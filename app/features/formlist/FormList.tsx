import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import JF from '../../JotForm';

function formClick(url: string) {
  ipcRenderer.invoke('openForm', url);
}

const FormList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result;
      // eslint-disable-next-line promise/always-return
      await JF.getForms().then((r: any) => {
        result = r;
      });
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="list-group container">
      {data.map((item) => (
        <li key={item.id} className="list-group-item p-0 row">
          <button
            type="button"
            className="btn col col-sm-9 col-lg-10"
            onClick={() => {
              formClick(item.url);
            }}
          >
            {item.title}
          </button>
          <div className="btn-group col col-sm-3 col-lg-2" role="group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Submissions
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
        </li>
      ))}
    </div>
    // <ul className="list-group">
    //   {data.map((item) => (
    //     <li
    //       key={item.id}
    //       className="list-group-item list-group-item-action"
    //       onClick={() => {
    //         formClick(item.url);
    //       }}
    //     >
    //       Cras justo odio
    //     </li>
    //   ))}
    // </ul>
  );
};

export default FormList;
