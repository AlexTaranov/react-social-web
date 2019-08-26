import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="l_main">
                <div className="l_main_container">
                    <div className="l_main_header">
                        <Header />
                    </div>
                    <div className="l_main_aside">
                        <Sidebar />
                    </div>
                    <div className="l_main_wrap">
                        <Route path='/profile' component={Profile} />
                        <Route path='/dialogs' component={Dialogs} />
                        <Route path='/news' component={News} />
                        <Route path='/music' component={Music} />
                        <Route path='/settings' component={Settings} />
                    </div>
                </div>
                <div className="l_main_footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
