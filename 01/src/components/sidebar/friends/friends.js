import React from 'react'
import Friend from './friend'

const Friends = (props) => {
    let friends = props.friendsState.map(f => <Friend id={f.id} link={f.link} avatar={f.avatar} name={f.name} />);

  return (
      <div className="b-friends">
          <h2 className="b-friends__title">Friends</h2>
          <ul className="b-friends__list">
              {friends}
          </ul>
      </div>
  );
}

export default Friends;
