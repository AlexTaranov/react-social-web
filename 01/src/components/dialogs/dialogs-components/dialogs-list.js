import React from 'react';
import DialogsAuthor from './dialogs-author';

const DialogsList = (props) => {
    return (
        <ul className="b_dialogs__list_contact">
            <DialogsAuthor
                nameauthor={'Valera'}
            />
            <DialogsAuthor
                nameauthor={'Petro'}
            />
            <DialogsAuthor
                nameauthor={'Alexander'}
            />
            <DialogsAuthor
                nameauthor={'Vasiliy'}
            />
        </ul>
    );
}

export default DialogsList;
