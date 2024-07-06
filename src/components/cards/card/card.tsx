import CardProp from '@interfaces/cardProp';
import booleanToYesNO from '@utils/boleanToYesNo';
import React from 'react';

class Card extends React.Component<CardProp> {
  constructor(props: CardProp) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.animal.name}</div>
        <div>
          🌍Earth Animal:{' '}
          {booleanToYesNO(this.props.animal.earthAnimal)}
        </div>
        <div>
          🐛Earth Insect:{' '}
          {booleanToYesNO(this.props.animal.earthInsect)}
        </div>
        <div>
          🐦Avian: {booleanToYesNO(this.props.animal.avian)}
        </div>
        <div>
          🐕‍🦺Canine:{' '}
          {booleanToYesNO(this.props.animal.canine)}
        </div>
        <div>
          🐈Feline:{' '}
          {booleanToYesNO(this.props.animal.feline)}
        </div>
      </div>
    );
  }
}

export default Card;
