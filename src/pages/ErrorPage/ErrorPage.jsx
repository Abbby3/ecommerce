import styles from './ErrorPage.module.scss'

const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404: Page Not Found</h1>
      <p>The page you are requesting was not found.</p>
    </div>
  );
}

export default ErrorPage