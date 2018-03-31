import React, { Component } from 'react';
import Head from './components/Head/Head';
import Main from './components/Main/Main';

import Footer from './components/Footer/Footer';
import Bottom from './components/Bottom/Bottom';
import './App.css';


class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Head />
        <Main />
        
        <Footer />
        <Bottom />
      </div>
      
    );
  }
}

export default App;