import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        data: {}
    };
    componentDidMount() {
        let that = this;
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then((stuff) => {
              that.setState({ data: stuff })
            })
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/api/message');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p className="App-intro">Special Message: {JSON.stringify(this.state.data)}</p>
        </header>
      </div>
    );
  }
}

export default App;
