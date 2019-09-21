import React from 'react';
import InfoPerson from './profile-infoperson/infoperson';
import ListPostsContainer from './profile-list-posts/listpostsContainer';

const Profile = (props) => {
    let state = props.store.getState();
    let infoPerson = state.profilePage.profileData.map(i => <InfoPerson avaprofile={i.profileAvatar} nameprofile={i.profileName} position={i.profilePosition} interests={i.profileInterest}/>);

    return (
        <main className="b_profile">
            <div className="b_profile_head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b_profile_head__img"/>
            </div>

            {infoPerson }

            <ListPostsContainer store={props.store} />

        </main>
    );
}

export default Profile;
