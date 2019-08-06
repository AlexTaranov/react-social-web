import React from 'react';

const Profile = () => {
    return (
        <main className="b-profile">
            <div className="b-profile-head">
                <img src="https://images11.popmeh.ru/upload/img_cache/33b/33bb184b5d125708c50e761639a74ee9_ce_990x660x0x0_cropped_800x427.jpg" alt="" className="b-profile-head_img"/>
            </div>
            <div className="b-profile-info">
                <div className="b-profile-info_figure">
                    <img src="http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg" alt="" className="b-profile-info_img"/>
                </div>
                <h2 className="b-profile-info_name">
                    Alexander Taranov
                </h2>
                <div className="b-profile-info_list">
                    <span className="b-profile-info_list-item">Senior-Frontend dev</span>
                    <span className="b-profile-info_list-item">Like auto and girls</span>
                </div>
            </div>
            <div className="b-profile-posts">
                
            </div>
            <div className="b-profile-list">
                
            </div>
        </main>
    );
}

export default Profile;
