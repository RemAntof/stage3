import { FormDataState } from '@utils/redux/redux';
import styles from './dataDisplay.module.css';

interface Prop {
  data: FormDataState;
}

const DataDisplay: React.FC<Prop> = ({ data }) => {
  const dataEntries = Object.entries(data);
  const dataWithoutPic = dataEntries.filter(
    (val) => val[0] !== 'picture'
  );
  if (data.name) {
    return (
      <div className={styles.dataContainer}>
        <div className={styles.imgContainer}>
          <img src={data.picture} alt="AVATAR" />
        </div>
        <div className={styles.dataContainer}>
          {dataWithoutPic.map((value) => {
            return (
              <div
                key={value[0] + value[1]}
                className={styles.dataRow}
              >
                <div>{value[0]}:</div>
                <div>{value[1].toString()}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <></>;
};

export default DataDisplay;
