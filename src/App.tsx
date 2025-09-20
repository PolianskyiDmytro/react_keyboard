import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.PureComponent<{}, State> {
  state = {
    pressedKey: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
        )}
      </div>
    );
  }
}
