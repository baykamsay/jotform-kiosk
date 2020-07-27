import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import JF from '../../JotForm';

const Sidebar = (props: {
  onSelect: import('rc-menu/lib/interface').MenuClickEventHandler | undefined;
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await JF.getFolders().then((r: { subfolders: [] }) => {
        return setData(r.subfolders);
      });
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
      {data.map((item: { id: number; name: string }) => (
        <Menu.Item key={item.id}>{item.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;
