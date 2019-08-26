import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsAuthor = (props) => {
    return (
        <li className="b_dialogs__list_item">
            <NavLink className="b_dialogs__list_link" activeClassName="m-active">{props.nameauthor}</NavLink>
        </li>
    );
}

export default DialogsAuthor;
