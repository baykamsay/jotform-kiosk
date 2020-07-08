import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './SignIn.css';

export default function SignIn(): JSX.Element {
  return (
    <div className="text-center">
      <form className={styles.formSignin}>
        <img
          className="mb-4"
          src="../assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        {/* <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label> */}
        <input
          type="email"
          id="inputEmail"
          className={styles.formControl}
          placeholder="Email address"
          required
          // autoFocus
        />
        {/* <label htmlFor="inputPassword" className="sr-only">
          Password
        </label> */}
        <input
          type="password"
          id="inputPassword"
          className={styles.formControl}
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          {/* <label>
            <input type={styles.checkbox} value="remember-me" />
            Remember me
          </label> */}
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
        <Link to={routes.HOME}>Back to home</Link>
      </form>
    </div>
  );
}
