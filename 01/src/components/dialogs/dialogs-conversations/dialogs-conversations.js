import React from 'react';
import DialogsMsg from './dialogs-msg';
import {addMsgActionCreator, updateNewMsgTextActionCreator} from "../../../redux/state";

const DialogsConversations = (props) => {

    let dialogsElements = props.msgs.map(m => <DialogsMsg authorava={m.authorava} authorname={m.authorname} authormsg={m.authormsg}/>);

    let newMsgElement = React.createRef();

    let addMsg = () => {
        props.dispatch(addMsgActionCreator());
    }

    let onMsgChange = () => {
        let text = newMsgElement.current.value;
        let action = updateNewMsgTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className="b_dialogs__conversation">
            {dialogsElements}

            <div className="b_dialogs__new-msg">
                <textarea ref={newMsgElement} value={props.newMsgText} onChange={onMsgChange} name="mymsg" id="mymsg" className="b-btn b_dialogs__newmsg"></textarea>
                <button className="b-btn b_dialogs__newsubmit" onClick={addMsg}>Send Message</button>
            </div>
        </div>
    );
}

export default DialogsConversations;
