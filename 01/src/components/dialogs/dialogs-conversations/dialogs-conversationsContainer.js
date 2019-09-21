import React from 'react';
import {addMsgActionCreator, updateNewMsgTextActionCreator} from "../../../redux/reducer-dialogs";
import DialogsConversations from "./dialogs-conversations";

const DialogsConversationsContainer = (props) => {

    let state = props.store.getState();

    let addMsg = () => {
        props.store.dispatch(addMsgActionCreator());
    };

    let onMsgChange = (text) => {
        let action = updateNewMsgTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <DialogsConversations
            addMsg={addMsg}
            onMsgChange={onMsgChange}
            msgs={state.messegesPage.messageData}
            newMsgText={state.messegesPage.newMsgText}
        />
    );
}

export default DialogsConversationsContainer;
