import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Button, Divider } from 'antd';
import Sidebar from '../features/sidebar/Sidebar';
import FormList from '../features/formlist/FormList';

const { SubMenu } = Menu;
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
        style={{ position: 'fixed', zIndex: 1, width: '100%' }}
      >
        <Row>
          <Col flex="200px">
            <div className="logo" />
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
    // <div>
    //   <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    //     {/* change with just an image */}
    //     <a
    //       className="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
    //       href="baykam.me"
    //     >
    //       JotForm
    //     </a>
    //     <button
    //       className="navbar-toggler position-absolute d-md-none collapsed"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#sidebarMenu"
    //       aria-controls="sidebarMenu"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <input
    //       className="form-control form-control-dark w-100"
    //       type="text"
    //       placeholder="Search"
    //       aria-label="Search"
    //     />
    //     <ul className="navbar-nav px-3">
    //       <li className="nav-item text-nowrap">
    //         {/* <Link to={routes.COUNTER} id="signin" className="nav-link">
    //           Sign In
    //         </Link> */}
    //         <button
    //           type="button"
    //           className="nav-link btn"
    //           onClick={props.onLogout}
    //         >
    //           Sign Out
    //         </button>
    //       </li>
    //     </ul>
    //   </nav>

    //   <div className="container-fluid">
    //     <div className="row">
    //       <nav
    //         id="sidebarMenu"
    //         className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    //       >
    //         <Sidebar onSelect={handleSelect} />
    //       </nav>

    //       <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    //         <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    //           <h1>My Forms</h1>
    //         </div>
    //         <FormList folder={folderId} />
    //       </main>
    //     </div>
    //   </div>
    // </div>
  );
}
