import styles from './Notification.module.css';

export const Notification = ({ children }) => {
  return <p className={styles.notification}>{children}</p>;
};
