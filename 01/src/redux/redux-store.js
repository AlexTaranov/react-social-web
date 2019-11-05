import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";
import reducerUsers from "./reducer-users";
import reducerNews from "./reducer-news";

let reducersMass = combineReducers({
    profilePage: reducerProfile,
    messegesPage: reducerDialogs,
    sidebarData: reducerSidebar,
    usersPage: reducerUsers,
    newsPage: reducerNews
});

let store = createStore(reducersMass);
window.store = store;

export default store;
