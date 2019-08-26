import React from 'react';
import InfoPerson from './profile-components/infoperson';
import ListPosts from './profile-components/listposts';

const Profile = () => {
    return (
        <main className="b_profile">
            <div className="b_profile_head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b_profile_head__img"/>
            </div>

            <InfoPerson
                avaprofile={'http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg'}
                nameprofile={'Alexander Taranov'}
                position={'FE DEV'}
                interests={'Cars'}
            />

            <ListPosts/>
        </main>
    );
}

export default Profile;
