import React from 'react';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader/>)
    }

    let workfind = () => {
        return (props.profile.lookingForAJob ? "Ищу работу" : "Не Ищу работу")
    };

    return (
        <div className="b_profile_info">
            <div className="b_profile_info__figure">
                <img src={props.profile.photos.large} alt="" className="b_profile_info__img"/>
            </div>
            <div className="b_profile_info__wrap">
                <h2 className="b_profile_info__name t-title-2">
                    {props.profile.fullName}
                </h2>
                <div className="b_profile_info__list">
                    <span className="b_profile_info_list__item">{props.profile.aboutMe}</span>
                    <span className="b_profile_info_list__item">{workfind()}</span>
                    <span className="b_profile_info_list__item">{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
