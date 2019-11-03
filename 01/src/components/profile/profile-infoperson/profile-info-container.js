import React from 'react';
import ProfileInfo from './profile-info';

const ProfileInfoContainer = () => {
    let state = props.state.getState();
debugger;
    console.log(state);

    let infoPerson = state.profilePage.profileData.map(i => <ProfileInfo avaprofile={i.profileAvatar} nameprofile={i.profileName} position={i.profilePosition} interests={i.profileInterest}/>);

    return (
        <div>
            {infoPerson}
        </div>
    )
}

export default ProfileInfoContainer;
