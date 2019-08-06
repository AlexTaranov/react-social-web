import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/profile';
import Aside from './components/aside';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="l_main">
            <div className="l_main_container">
                <div className="l_main_header">
                    <Header />
                </div>
                <div className="l_main_aside">
                    <Aside />
                </div>
                <div className="l_main_wrap">
                    <Profile />
                </div>
            </div>
            <div className="l_main_footer">
                <Footer />
            </div>
        </div>
    );
  }
}

export default App;