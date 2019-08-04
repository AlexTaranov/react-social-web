import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Profile from './components/profile';
import Aside from './components/aside';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="l-main">
            <div className="l-main-container">
                <div className="l-main-header">
                    <Header />
                </div>
                <div className="l-main-aside">
                    <Aside />
                </div>
                <div className="l-main-wrap">
                    <Profile />
                </div>
            </div>
            <div className="l-main-footer">
                <Footer />
            </div>
        </div>
    );
  }
}

export default App;