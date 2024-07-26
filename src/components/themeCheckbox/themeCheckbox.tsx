import React from 'react';
import styles from './themeCheckbox.module.css';

interface ThemeCheckboxProps {
  switchTheme: () => void;
}

const ThemeCheckbox: React.FC<ThemeCheckboxProps> = ({
  switchTheme,
}) => {
  return (
    <div className={styles.container}>
      <input
        id="checkbox"
        type="checkbox"
        onClick={switchTheme}
      />
      <div className={styles.background}>
        <img
          className={styles.stars}
          src="https://gateway.pinata.cloud/ipfs/Qmcd1rqt5BJrQYX9hHeWc8AqEhBp2pj6Mis82FC5wVW2a2"
        />
        <div className={styles.clouds}>
          <img
            className={styles.stars}
            src="https://gateway.pinata.cloud/ipfs/QmdDiiwPP4VC5jmRTtPa1v4MrA5JUesq8WZHs8ACLt3Vcj"
          />
          <img
            className={styles.stars}
            src="https://gateway.pinata.cloud/ipfs/QmYNhwZuMNCucpn8YgGxPdKBnVsBDr473pbXCmxKE4uPJa"
          />
        </div>
      </div>
      <label htmlFor="checkbox" className={styles.content}>
        <div className={styles.sun__moon__container}>
          <div className={styles.sun__moon}>
            <div className={styles.sun}></div>
            <div className={styles.moon}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.rays}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeCheckbox;
