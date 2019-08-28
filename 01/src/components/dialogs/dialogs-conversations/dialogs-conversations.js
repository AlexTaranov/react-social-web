import React from 'react';
import DialogsMsg from './dialogs-msg';

const DialogsConversations = (props) => {
    let messageData = [
        {authorava: 'https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg', authorname: 'Valera', authormsg: 'Hello its my message for you!'},
        {authorava: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg', authorname: 'Me', authormsg: 'Hey, men! Nice to meet you.'},
        ]

    let dialogsElements = messageData.map(m => <DialogsMsg authorava={m.authorava} authorname={m.authorname} authormsg={m.authormsg}/>);

    return (
        <div className="b_dialogs__conversation">
            {dialogsElements}
        </div>
    );
}

export default DialogsConversations;
