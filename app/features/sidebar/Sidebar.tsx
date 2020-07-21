import React, { useEffect, useState } from 'react';
import JF from '../../JotForm';

const Sidebar = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result;
      // eslint-disable-next-line promise/always-return
      await JF.getFolders().then((r) => {
        result = r;
      });
      setData(result.subfolders);
    }

    fetchData();
  }, []);

  return (
    <div className="sidebar-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <button
            type="button"
            className="btn btn-link nav-link"
            data-id={undefined}
            onClick={props.onSelect}
          >
            All Forms
          </button>
        </li>
        {data.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              type="button"
              className="btn btn-link nav-link"
              data-id={item.id}
              onClick={props.onSelect}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
