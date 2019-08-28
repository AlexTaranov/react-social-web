import React from 'react';
import DialogsAuthor from './dialogs-author';

const DialogsList = (props) => {

    let authorList = props.dialogs.map(a => <DialogsAuthor nameauthor={a.nameauthor} authorid={a.idAuthor}/>);

    return (
        <ul className="b_dialogs__list_contact">
            {authorList}
        </ul>
    );
}

export default DialogsList;
