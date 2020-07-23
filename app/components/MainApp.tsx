import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Button, Divider } from 'antd';
import Sidebar from '../features/sidebar/Sidebar';
import FormList from '../features/formlist/FormList';
import jotFormLogo from '../../resources/brand-resources/jotform-logo.png';

const { Header, Content, Sider } = Layout;

export default function MainApp(props: {
  onLogout:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
}): JSX.Element {
  const [folderId, setFolderId] = useState('');
  function handleSelect(e: { key: React.SetStateAction<string> }) {
    setFolderId(e.key);
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        className="header"
        style={{
          position: 'fixed',
          zIndex: 3,
          width: '100%',
          padding: '0 24px',
        }}
      >
        <Row>
          <Col flex="200px">
            <img className="logo" src={jotFormLogo} alt="jotform logo" />
          </Col>
          <Col flex="auto" />
          <Col>
            <Button type="default" onClick={props.onLogout}>
              Sign Out
            </Button>
          </Col>
        </Row>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          width={200}
          className="site-layout-background"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Sidebar onSelect={handleSelect} />
        </Sider>
        <Layout style={{ padding: '24px 24px', marginLeft: 200 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/* <h1 style={{ fontSize: '2rem' }}>My Forms</h1> */}
            <Divider
              orientation="left"
              plain={false}
              style={{ fontSize: '2rem' }}
            >
              My Forms
            </Divider>
            <FormList folder={folderId} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
