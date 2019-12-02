import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProfileContainer from "./components/profile/profile-container";
import Dialogs from './components/dialogs/dialogs';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';
import Users from './components/users/users';
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
                        <Sidebar store={props.store} />
                    </div>
                    <div className="l_main_wrap">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                        <Route path='/news' render={() => <News />} />
                        <Route path='/music' render={() => <Music />} />
                        <Route path='/settings' render={() => <Settings />} />
                        <Route path='/users' render={() => <Users />} />
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
