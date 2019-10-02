import React from 'react';
import Friend from './friend'

const Friends = (props) => {
    let friends = props.friendsState.map(f => <Friend id={f.id} link={f.link} avatar={f.avatar} name={f.name} />);

  return (
      <div className="b-friends">
          <h3 className="b-friends__title">Friends</h3>
          <ul className="b-friends__list">
              {friends}
          </ul>
      </div>
  );
}

export default Friends;
