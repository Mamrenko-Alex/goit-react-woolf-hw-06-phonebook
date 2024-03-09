import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};
