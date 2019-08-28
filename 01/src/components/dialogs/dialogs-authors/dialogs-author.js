import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsAuthor = (props) => {
    let path = "/dialogs/" + props.idAuthor;

    return (
        <li className="b_dialogs__list_item">
            <NavLink
                className="b_dialogs__list_link"
                activeClassName="m-active"
                to={path} >
                    {props.nameauthor}
            </NavLink>
        </li>
    );
}

export default DialogsAuthor;
