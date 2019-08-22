import React from 'react';

const InfoPerson = () => {
    return (
        <div className="b_profile_info">
            <div className="b_profile_info__figure">
                <img src="http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg" alt="" className="b_profile_info__img"/>
            </div>
            <div className="b_profile_info__wrap">
                <h2 className="b_profile_info__name">
                    Alexander Taranov
                </h2>
                <div className="b_profile_info__list">
                    <span className="b_profile_info_list__item">Full Stack Senior-Frontend dev</span>
                    <span className="b_profile_info_list__item">Like auto and girls</span>
                </div>
            </div>
        </div>
    );
}

export default InfoPerson;
