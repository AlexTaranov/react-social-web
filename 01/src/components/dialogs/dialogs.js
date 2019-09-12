import React from 'react';
import DialogsList from './dialogs-authors/dialogs-list';
import DialogsConversations from './dialogs-conversations/dialogs-conversations';

const Dialogs = (props) => {
    return (
        <main className="b_dialogs">
            <div className="b_dialogs__wrap">
                <h1 className="b_dialogs__title">Dialogs</h1>
                <section className="b_dialogs__list_wrap">
                    <DialogsList dialogs={props.stateMesseges.dialogsData} />
                </section>
                <section className="b_dialogs__conversation_wrap">
                    <DialogsConversations
                        msgs={props.stateMesseges.messageData}
                        addMsg={props.addMsg}
                        newMsgText={props.stateMesseges.newMsgText}
                        updateNewMessageText={props.updateNewMessageText}
                    />
                </section>
            </div>
        </main>
    );
}

export default Dialogs;
