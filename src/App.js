import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component{  
  render(){
    return (
      <div className="wrapper pageFix">
          <div className="allWrapping">
            <Header />
            <Main />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
