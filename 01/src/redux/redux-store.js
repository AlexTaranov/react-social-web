import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";
import reducerUsers from "./reducer-users";
import reducerAuth from "./reducer-auth";

let reducersMass = combineReducers({
    profilePage: reducerProfile,
    messegesPage: reducerDialogs,
    sidebarData: reducerSidebar,
    usersPage: reducerUsers,
    authuser: reducerAuth,
});

let store = createStore(reducersMass);
window.store = store;

export default store;
