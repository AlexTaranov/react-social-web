import React from 'react';

const Profile = () => {
    return (
        <main className="b_profile">
            <div className="b_profile_head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b_profile_head__img"/>
            </div>
            <div className="b_profile_info">
                <div className="b_profile_info__figure">
                    <img src="http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg" alt="" className="b_profile_info__img"/>
                </div>
                <h2 className="b_profile_info__name">
                    Alexander Taranov
                </h2>
                <div className="b_profile_info__list">
                    <span className="b_profile_info_list__item">Senior-Frontend dev</span>
                    <span className="b_profile_info_list__item">Like auto and girls</span>
                </div>
            </div>
            <div className="b_profile_posts">
                
            </div>
            <div className="b_profile_list">
                
            </div>
        </main>
    );
}

export default Profile;
