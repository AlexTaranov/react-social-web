import React from "react";
import loaderImg from "../../../assets/images/loader.gif";


let Preloader = (props) => {
    return (
        <div className="b-loader">
            <img src={loaderImg} alt="loader" />;
        </div>
    )
};

export default Preloader;

