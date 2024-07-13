import styles from '@components/loader/loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.spinnerBox}>
      <div className={styles.configureBorder1}>
        <div className={styles.configureCore}></div>
      </div>
      <div className={styles.configureBorder2}>
        <div className={styles.configureCore}></div>
      </div>
    </div>
  );
};

export default Loader;
