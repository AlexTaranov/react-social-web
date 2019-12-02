import React from 'react';
import ProfileInfo from './profile-infoperson/profile-info';
import ListPostsContainer from './profile-posts/posts-list-container';

const Profile = (props) => {

    return (
        <main className="b_profile">
            <div className="b_profile_head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b_profile_head__img"/>
            </div>

            <ProfileInfo profile={props.profile}/>
            <ListPostsContainer />

        </main>
    );
};



export default Profile;
