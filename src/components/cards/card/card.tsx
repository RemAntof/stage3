import CardProp from '@interfaces/cardProp';
import booleanToYesNO from '@utils/boleanToYesNo';
import React from 'react';
import styles from '@components/cards/card/card.module.css';

class Card extends React.Component<CardProp> {
  constructor(props: CardProp) {
    super(props);
  }
  render() {
    return (
      <div className={styles.cardBox}>
        <div className={styles.cardName}>
          {this.props.animal.name}
        </div>
        <div className={styles.cardText}>
          🌍Earth Animal:{' '}
          {booleanToYesNO(this.props.animal.earthAnimal)}
        </div>
        <div className={styles.cardText}>
          🐛Earth Insect:{' '}
          {booleanToYesNO(this.props.animal.earthInsect)}
        </div>
        <div className={styles.cardText}>
          🐦Avian: {booleanToYesNO(this.props.animal.avian)}
        </div>
        <div className={styles.cardText}>
          🐕‍🦺Canine:{' '}
          {booleanToYesNO(this.props.animal.canine)}
        </div>
        <div className={styles.cardText}>
          🐈Feline:{' '}
          {booleanToYesNO(this.props.animal.feline)}
        </div>
      </div>
    );
  }
}

export default Card;
