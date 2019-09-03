import React from 'react';
import DialogsMsg from './dialogs-msg';

const DialogsConversations = (props) => {

    let dialogsElements = props.msgs.map(m => <DialogsMsg authorava={m.authorava} authorname={m.authorname} authormsg={m.authormsg}/>);

    let newMsgElement = React.createRef();

    let addMsg = () => {
        let text = newMsgElement.current.value;
        alert(text);
    }

    return (
        <div className="b_dialogs__conversation">
            {dialogsElements}

            <div className="b_dialogs__new-msg">
                <textarea ref={newMsgElement} name="mymsg" id="mymsg" placeholder="your msg" className="b-btn b_dialogs__newmsg"></textarea>
                <button className="b-btn b_dialogs__newsubmit" onClick={addMsg}>Send Message</button>
            </div>
        </div>
    );
}

export default DialogsConversations;
