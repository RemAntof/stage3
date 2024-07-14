import React from 'react';

class TriggerErrorButton extends React.Component {
  state = { throwError: false };

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Intentional Error');
    }

    return (
      <button onClick={this.handleClick}>
        Trigger Error
      </button>
    );
  }
}

export default TriggerErrorButton;
