const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let stateInitial = {
    postData: [
        {
            idPost: 1,
            message: 'Hello, its my first Post?',
            likesCount: "32",
            avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
        },
        {
            idPost: 2,
            message: 'Very good',
            likesCount: "25",
            avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'
        },
        {
            idPost: 3,
            message: 'Very good 2222',
            likesCount: "31",
            avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
        }
    ],
    profileData: [
        {
            profileName: 'Human Human',
            profileInterest: 'Cars?',
            profilePosition: "FE DEV",
            profileAvatar: 'http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg'
        }
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
};

const reducerProfile = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                idPost: 5,
                message: state.newPostText,
                likesCount: '24',
                avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default reducerProfile;
