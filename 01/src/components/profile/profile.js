import React from 'react';
import InfoPerson from './profile-infoperson/infoperson';
import ListPosts from './profile-list-posts/listposts';

const Profile = (props) => {
    let postData = [
        {idPost: 1, message: 'Hello, its my first Post?', likesCount: "32", avatar: 'http://gameszon.net/content/cats-img/avatar3.png'},
        {idPost: 1, message: 'Very good', likesCount: "25", avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'}
    ]

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

            <ListPosts postsMassive={postData} />

        </main>
    );
}

export default Profile;
