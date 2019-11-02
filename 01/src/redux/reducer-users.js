const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let stateInitial = {
    userData: [
        // {
        //     userId: 1,
        //     userName: 'Name111',
        //     userLocation: {city: 'Kyiv', country: 'Ukraine'},
        //     userStatus: "Tratatata",
        //     userFollow: true,
        //     avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
        // },
        // {
        //     userId: 2,
        //     userName: 'Name222',
        //     userLocation: {city: 'Minsk', country: 'Belarus'},
        //     userStatus: "Tratatata222",
        //     userFollow: false,
        //     avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
        // },
        // {
        //     userId: 3,
        //     userName: 'Name333',
        //     userLocation: {city: 'Odessa', country: 'Ukraine'},
        //     userStatus: "Tratatata333",
        //     userFollow: true,
        //     avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
        // }
    ]
};

const reducerUsers = (state = stateInitial, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.userData], Одно и то же с тем что в след строке
                //users: state.userData.map( u => u ),
                userData: state.userData.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.userData], Одно и то же с тем что в след строке
                //users: state.userData.map( u => u ),
                userData: state.userData.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {...state, userData: [ ...state.userData, ...action.users ]};

        default:
            return state
    }
}


export const userFollowAC = (id) => ({type: FOLLOW, id});
export const userUnfollowAC = (id) => ({type: UNFOLLOW, id});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default reducerUsers;
