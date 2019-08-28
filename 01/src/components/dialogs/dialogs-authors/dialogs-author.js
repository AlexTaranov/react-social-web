import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsAuthor = (props) => {
    let path = "/dialogs/" + props.authorid;

    return (
        <li className="b_dialogs__list_item">
            <NavLink
                className="b_dialogs__list_link"
                activeClassName="m-active"
                id={props.authorid}
                to={path} >
                    {props.nameauthor}
            </NavLink>
        </li>
    );
}

export default DialogsAuthor;
