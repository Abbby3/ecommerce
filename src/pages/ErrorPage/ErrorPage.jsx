import styles from './ErrorPage.module.scss'
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404: Page Not Found</h1>
      <p>The URL you requested was not found on the server.</p>
      <NavLink className={styles.logo} to="/">
        Back to Home
      </NavLink>
    </div>
  );
}

export default ErrorPage