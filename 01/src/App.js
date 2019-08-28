import React from 'react';
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

const App = (props) => {
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
                        <Route path='/profile' render={() => <Profile posts={props.posts} />} />
                        <Route path='/dialogs' render={() => <Dialogs />} />
                        <Route path='/news' render={() => <News />} />
                        <Route path='/music' render={() => <Music />} />
                        <Route path='/settings' render={() => <Settings />} />
                    </div>
                </div>
                <div className="l_main_footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
  }

export default App;
