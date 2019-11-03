import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer-profile";
import PostsList from "./posts-list";
import {connect} from "react-redux";

let profileStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
};

let profileDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text); // передается дефолтное значение textarea из стейта в значение обьекта в action
            dispatch(action);
        },
        newPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const PostsListContainer = connect(profileStateToProps, profileDispatchToProps)(PostsList);
// почему две скобочки? Потому что мы первый раз вызвали ее, она вернула нам другую функцию, и мы вызываем потом ту функцию, которую вернул предыдущий вызов
// т.е. PostsList законнектили к стору


export default PostsListContainer;

// let a = {
//     firsy: '1',
//     second: 10,
//     words: ['1', '2', '3'],
//     USSRtanks: {
//         heavy: {
//             IS1: 'IOSIF STALIN',
//             KV1: 'KLIM VOROSHILOV'
//         },
//     }
// }
//
// let b = {...a};
//
// b.firsy={...a.firsy};
// b.USSRtanks={...a.USSRtanks};
// b.USSRtanks.heavy={...a.USSRtanks.heavy};
// b.words = [...a.words]
//
//
// console.log(a.firsy === b.firsy);
// console.log(a.second === b.second);
// console.log(a.words === a.words);
// console.log(a.USSRtanks === b.USSRtanks);
// console.log(a.USSRtanks.heavy.IS1 === b.USSRtanks.heavy.IS1);


