import React, { useState } from 'react';

export default function Login(props: {
  onLogin:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}): JSX.Element {
  const [jotformUsername, updateJotformUsername] = useState('');
  const [jotformPassword, updateJotformPassword] = useState('');

  return (
    <div className="container-fluid">
      <form className="mx-auto">
        <div className="form-group">
          <label htmlFor="inputUsername">
            Username
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              value={jotformUsername}
              onChange={(e) => updateJotformUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">
            Password
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={jotformPassword}
              onChange={(e) => updateJotformPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={props.onLogin}
          className="btn btn-primary"
          data-username={jotformUsername}
          data-password={jotformPassword}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
