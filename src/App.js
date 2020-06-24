import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component{  

/* 
  componentDidMount(){
    axios({
      url: this.state.originLink,
      method: 'GET',
      responseType: 'JSON'
    }).then((x) => {
      console.log('gg');
      console.log(x);
    })
  } */

/* https://pokemoncries.com/cries-old/3.mp3 */



  render(){
    return (
      <div className="wrapper">
          <Header />
          <Main />
          <Footer />
      </div>
    );
  
  }
}

export default App;
