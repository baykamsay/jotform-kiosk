import React, { useState } from 'react';
import Sidebar from '../features/sidebar/Sidebar';
import FormList from '../features/formlist/FormList';

export default function MainApp(): JSX.Element {
  const [folderId, setFolderId] = useState('');
  function handleSelect(e: {
    target: { dataset: { id: React.SetStateAction<string> } };
  }) {
    setFolderId(e.target.dataset.id);
  }
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
            <button
              type="button"
              className="nav-link btn"
              onClick={() => {
                console.log('Will do');
              }}
            >
              Sign Out
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
            <Sidebar onSelect={handleSelect} />
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1>My Forms</h1>
            </div>
            <FormList folder={folderId} />
          </main>
        </div>
      </div>
    </div>
  );
}
