import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import JF from '../../JotForm';

const { SubMenu } = Menu;

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
    // <div className="sidebar-sticky pt-3">
    //   <ul className="nav flex-column">
    //     <li className="nav-item">
    //       <button
    //         type="button"
    //         className="btn btn-link nav-link"
    //         data-id={undefined}
    //         onClick={props.onSelect}
    //       >
    //         All Forms
    //       </button>
    //     </li>
    //     {data.map((item) => (
    //       <li key={item.id} className="nav-item">
    //         <button
    //           type="button"
    //           className="btn btn-link nav-link"
    //           data-id={item.id}
    //           onClick={props.onSelect}
    //         >
    //           {item.name}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
      onClick={props.onSelect}
    >
      <Menu.Item key="1">All Forms</Menu.Item>
      {data.map((item) => (
        <Menu.Item key={item.id}>{item.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
