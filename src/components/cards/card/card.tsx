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
          '🌍'+
          {booleanToYesNO(this.props.animal.earthAnimal)}
        </div>
        <div>
          '🐛'+
          {booleanToYesNO(this.props.animal.earthInsect)}
        </div>
        <div>
          '🐦'+{booleanToYesNO(this.props.animal.avian)}
        </div>
        <div>
          '🐕‍🦺'+{booleanToYesNO(this.props.animal.canine)}
        </div>
        <div>
          '🐈'+{booleanToYesNO(this.props.animal.feline)}
        </div>
      </div>
    );
  }
}

export default Card;
