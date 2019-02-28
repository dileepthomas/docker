import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: null
  }

  componentWillMount(){
    this.dataFetching()
  }

  dataFetching = async () => {
    const resjson = await fetch('/api/data');
    const res = await resjson.json();
    this.setState({
      response: res.data
    })
  }


  render() {
    return (
        this.state.response ? this.state.response : null
    );
  }
}

export default App;
