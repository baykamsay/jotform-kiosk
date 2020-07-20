import React, { useEffect, useState } from 'react';
import JF from '../../JotForm';

const Sidebar = () => {
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
          <a className="nav-link active" href="baykam.me">
            <span data-feather="home" />
            All Forms
            <span className="sr-only">(current)</span>
          </a>
        </li>
        {data.map((item) => (
          <li key={item.id} className="nav-item">
            <a className="nav-link" href="baykam.me">
              <span data-feather="file" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
