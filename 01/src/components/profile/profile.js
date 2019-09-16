import React from 'react';
import InfoPerson from './profile-infoperson/infoperson';
import ListPosts from './profile-list-posts/listposts';

const Profile = (props) => {
    let infoPerson = props.stateProfilePage.profileData.map(i => <InfoPerson avaprofile={i.profileAvatar} nameprofile={i.profileName} position={i.profilePosition} interests={i.profileInterest}/>);

    return (
        <main className="b_profile">
            <div className="b_profile_head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b_profile_head__img"/>
            </div>

            {infoPerson }

            <ListPosts
                posts={props.stateProfilePage.postData}
                newPostText={props.stateProfilePage.newPostText}
                dispatch={props.dispatch}/>

        </main>
    );
}

export default Profile;
