import React from 'react';
import DialogsMsg from './dialogs-msg';

const DialogsConversations = (props) => {

    let dialogsElements = props.msgs.map(m => <DialogsMsg authorava={m.authorava} authorname={m.authorname} authormsg={m.authormsg}/>);

    return (
        <div className="b_dialogs__conversation">
            {dialogsElements}
        </div>
    );
}

export default DialogsConversations;
