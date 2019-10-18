const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USER = 'SET_USER';

let stateInitial = {
    usersData: [
        {
            idU: 1,
            name: 'Sasha',
            followed: true,
            status: "online",
            avatar: 'http://gameszon.net/content/cats-img/avatar3.png',
            location: {country: 'Ukraine', city: 'Odessa'}
        },
        {
            idU: 2,
            name: 'Andrey',
            followed: false,
            status: "online",
            avatar: 'http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg',
            location: {country: 'Ukraine', city: 'Odessa'}
        },
        {
            idU: 3,
            name: 'Petr',
            followed: true,
            status: "online",
            avatar: 'http://gameszon.net/content/cats-img/avatar3.png',
            location: {country: 'Ukraine', city: 'Odessa'}
        },
        {
            idU: 4,
            name: 'Sergey',
            followed: false,
            status: "online",
            avatar: 'http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg',
            location: {country: 'Ukraine', city: 'Odessa'}
        },
    ]
};

const reducerUsers = (state = stateInitial, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                //users: [...state.usersData],                  --- эти две записи идентичны
                //users: state.usersData.map(callback: u => u)  //--- эти две записи идентичны (но это более подходящая)
                users: state.usersData.map(u => {
                    if (u.idU === action.idUser) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
        return {
                    ...state,
                    //users: [...state.usersData],                  --- эти две записи идентичны
                    //users: state.usersData.map(callback: u => u)  //--- эти две записи идентичны (но это более подходящая)
                    users: state.usersData.map(u => {
                if (u.idU === action.idUser) {
                    return {...u, followed: false}
                }
                return u;
            })
        }
        case SET_USER: {
            return {...state, users: [...state.usersData, ...action.usersData]}
        }
        default:
            return state
    }
}

export const followAC = () => ({type: FOLLOW_USER});
export const unfollowAC = () => ({type: UNFOLLOW_USER});
export const setUserAC = () => ({type: SET_USER});

export default reducerUsers;
