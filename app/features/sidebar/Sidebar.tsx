import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import JF from '../../JotForm';

const Sidebar = (props: {
  onSelect: import('rc-menu/lib/interface').MenuClickEventHandler | undefined;
}) => {
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
