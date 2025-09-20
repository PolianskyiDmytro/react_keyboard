import React from 'react';

interface State {
  lastKey: string;
}

export class App extends React.PureComponent<State> {
  state = {
    lastKey: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        {lastKey.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${lastKey}]`}</p>
        )}
      </div>
    );
  }
}
