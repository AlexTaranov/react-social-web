import React from 'react';
import {addMsgActionCreator, updateNewMsgTextActionCreator} from "../../../redux/reducer-dialogs";
import DialogsTalk from "./dialogs-talk";

const DialogsTalkContainer = (props) => {

    let state = props.store.getState();

    let addMsg = () => {
        props.store.dispatch(addMsgActionCreator());
    };

    let onMsgChange = (text) => {
        let action = updateNewMsgTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <DialogsTalk
            addMsg={addMsg}
            onMsgChange={onMsgChange}
            msgs={state.messegesPage.messageData}
            newMsgText={state.messegesPage.newMsgText}
        />
    );
}

export default DialogsTalkContainer;
