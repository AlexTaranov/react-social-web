import React from 'react';
import InfoPerson from './profile-components/infoperson';
import ListPosts from './profile-components/listposts';

const Profile = () => {
    return (
        <main className="b_profile">
            <div className="b_profile_head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b_profile_head__img"/>
            </div>

            <InfoPerson />

            <div className="b_profile_list">

            </div>

            <ListPosts/>
        </main>
    );
}

export default Profile;
