import React, { Component } from 'react';
import logo from './logo.svg';
import ColorPicker from './color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.umd.min.css';
import './App.css';

class App extends Component {
  state = {
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1
  };

  onChange = ({ hue, saturation, luminosity, alpha }) => {
    this.setState({ hue, saturation, luminosity, alpha });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ColorPicker
            {...this.state}
            className="app-logo"
            onChange={this.onChange}
          />
          <p>Say Hello</p>
        </header>
      </div>
    );
  }
}

export default App;
