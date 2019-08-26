import React from 'react';
import DialogsAuthor from './dialogs-author';

const DialogsList = (props) => {
    let dialogsData = [
        {idAuthor: 1, nameauthor: 'Valera'},
        {idAuthor: 2, nameauthor: 'Petro'},
        {idAuthor: 3, nameauthor: 'Alexander'},
        {idAuthor: 4, nameauthor: 'Vasiliy'},
        ]

    return (
        <ul className="b_dialogs__list_contact">
            <DialogsAuthor
                nameauthor={dialogsData[0].nameauthor}
                authorid={dialogsData[0].idAuthor}
            />
            <DialogsAuthor
                nameauthor={dialogsData[1].nameauthor}
                authorid={dialogsData[1].idAuthor}
            />
            <DialogsAuthor
                nameauthor={'Alexander'}
                authorid={'3'}
            />
            <DialogsAuthor
                nameauthor={'Vasiliy'}
                authorid={'4'}
            />
        </ul>
    );
}

export default DialogsList;
