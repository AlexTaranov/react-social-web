import React from 'react';

const DialogsMsg = (props) => {
    return (
        <div className="b_message">
            <figure className="b_message__thumbnail">
                <img src={props.avamsg} alt="" className="b_message__thumbnail_img"/>
                <div className="b_message__thumbnail_name">{props.authorname}</div>
            </figure>

            <div className="b_message__msg">
                {props.authormsg}
            </div>
        </div>
    );
}

export default DialogsMsg;
