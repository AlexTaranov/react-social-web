import React from 'react';
import DialogsAuthor from './dialogs-author';

const DialogsList = (props) => {
    let dialogsData = [
        {idAuthor: 1, nameauthor: 'Valera'},
        {idAuthor: 2, nameauthor: 'Petro'},
        {idAuthor: 3, nameauthor: 'Alexander'},
        {idAuthor: 4, nameauthor: 'Vasiliy'},
        ]

    let authorList = dialogsData.map(a => <DialogsAuthor nameauthor={a.nameauthor} authorid={a.idAuthor}/>);

    return (
        <ul className="b_dialogs__list_contact">
            {authorList}
        </ul>
    );
}

export default DialogsList;
