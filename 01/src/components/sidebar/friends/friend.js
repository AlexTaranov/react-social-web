import React from 'react'

const Friend = (props) => {
    return (
        <li className="b-friends__item" id={props.id}>
            <figure className="b-friends__thumbnail">
                <a href={props.link} className="b-friends__link">
                    <img className="b-friends__img" src={props.avatar} alt=""/>
                </a>
            </figure>
            <span className="b-friends__name">{props.name}</span>
        </li>
    )
}

export default Friend;
