import React from 'react';
// import JF from 'jotform';
import { ipcRenderer } from 'electron';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
// import styles from './Home.css';

async function handleSignin() {
  // JF.initialize({
  //   enableCookieAuth: true,
  //   appName: 'JotForm Kiosk',

  //   // change to "full" if necessary in the future
  //   accessType: 'readOnly',
  // });
  // JF.login(
  //   function () {
  //     JF.getUser(async function (resp: any) {
  //       await ipcRenderer.invoke("setStoreValue", "apiKey", "sghtkri34254365");
  //     });
  //   },
  //   function () {
  //     console.log('Error Signing In');
  //     handleSignin();
  //   }
  // );

  ipcRenderer.invoke('setStoreValue', 'test2', 'Hey!');
  console.log(ipcRenderer.invoke('getStoreValue', 'test2'));
}

export default function Home(): JSX.Element {
  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        {/* change with just an image */}
        <a
          className="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
          href="baykam.me"
        >
          JotForm
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            {/* <Link to={routes.COUNTER} id="signin" className="nav-link">
              Sign In
            </Link> */}
            <button type="button" className="nav-link" onClick={handleSignin}>
              Sign In
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="baykam.me">
                    <span data-feather="home" />
                    Forms
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="baykam.me">
                    <span data-feather="file" />
                    Submissions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="baykam.me">
                    <span data-feather="shopping-cart" />
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1>My Forms</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>

            <h2>Ready</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>ipsum</td>
                    <td>Praesent</td>
                    <td>mauris</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Available to Download</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>ipsum</td>
                    <td>Praesent</td>
                    <td>mauris</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
