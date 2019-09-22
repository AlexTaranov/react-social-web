import React from 'react';

const ProfileInfo = (props) => {
    return (
        <div className="b_profile_info">
            <div className="b_profile_info__figure">
                <img src={props.avaprofile} alt="" className="b_profile_info__img"/>
            </div>
            <div className="b_profile_info__wrap">
                <h2 className="b_profile_info__name t-title-2">
                    {props.nameprofile}
                </h2>
                <div className="b_profile_info__list">
                    <span className="b_profile_info_list__item">{props.position}</span>
                    <span className="b_profile_info_list__item">{props.interests}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
