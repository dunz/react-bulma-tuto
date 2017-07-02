import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'

import Home from './components/Home/Home'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Faq} />
          <Footer/>
      </div>
    );
  }
}

export default App;
