import React from 'react';
import DialogsList from './dialogs-authors/dialogs-list';
import DialogsConversationsContainer from './dialogs-conversations/dialogs-conversationsContainer';

const Dialogs = (props) => {
    let stateMsg = props.store.getState().messegesPage;

    return (
        <main className="b_dialogs">
            <div className="b_dialogs__wrap">
                <h1 className="b_dialogs__title">Dialogs</h1>
                <section className="b_dialogs__list_wrap">
                    <DialogsList dialogs={stateMsg.dialogsData} />
                </section>
                <section className="b_dialogs__conversation_wrap">
                    <DialogsConversationsContainer store={props.store} />
                </section>
            </div>
        </main>
    );
}

export default Dialogs;
