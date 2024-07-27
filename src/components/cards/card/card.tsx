import React, { useContext } from 'react';
import CardProp from '@interfaces/cardProp';
import booleanToYesNO from '@utils/boleanToYesNo';
import styles from '@components/cards/card/card.module.css';
import { ThemeContext } from 'src/App';

const Card: React.FC<CardProp> = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.cardBox} cardBox ${theme}`}>
      <div
        className={`${styles.cardName} cardName ${theme}`}
      >
        {props.animal.name}
      </div>
      <div className={styles.cardText}>
        🌍Earth Animal:{' '}
        {booleanToYesNO(props.animal.earthAnimal)}
      </div>
      <div className={styles.cardText}>
        🐛Earth Insect:{' '}
        {booleanToYesNO(props.animal.earthInsect)}
      </div>
      <div className={styles.cardText}>
        🐦Avian: {booleanToYesNO(props.animal.avian)}
      </div>
      <div className={styles.cardText}>
        🐕‍🦺Canine: {booleanToYesNO(props.animal.canine)}
      </div>
      <div className={styles.cardText}>
        🐈Feline: {booleanToYesNO(props.animal.feline)}
      </div>
    </div>
  );
};

export default Card;
