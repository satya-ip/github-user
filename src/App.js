import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GitUserSearchPage  from './components/GitUserSearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>GitHub User Lookup</h2>
        </div>

        <GitUserSearchPage></GitUserSearchPage>
      </div>
    );
  }
}

export default App;
