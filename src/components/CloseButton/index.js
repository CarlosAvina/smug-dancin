import styles from './CloseButton.module.css';

const CloseButton = ({ onClick }) => {
  return <button className={styles.closeButton} onClick={onClick}>Close</button>;
};

export default CloseButton;
