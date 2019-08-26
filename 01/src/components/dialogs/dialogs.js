import React from 'react';
import DialogsList from './dialogs-components/dialogs-list';
import DialogsConversations from './dialogs-components/dialogs-conversations';

const Dialogs = (props) => {
    return (
        <main className="b_dialogs">
            <div className="b_dialogs__wrap">
                <h1 className="b_dialogs__title">Dialogs</h1>
                <section className="b_dialogs__list_wrap">
                    <DialogsList/>
                </section>
                <section className="b_dialogs__conversation_wrap">
                    <DialogsConversations/>
                </section>
            </div>
        </main>
    );
}

export default Dialogs;
