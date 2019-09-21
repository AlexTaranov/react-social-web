import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";

let reducersMass = combineReducers({
    profilePage: reducerProfile,
    messegesPage: reducerDialogs,
    sidebarData: reducerSidebar
});

let store = createStore(reducersMass);

export default store;
