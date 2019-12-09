const SET_USER_DATA = 'SET_USER_DATA';

let stateInitial = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const reducerAuth = (state = stateInitial, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.datauth,
                isAuth: true
            };

        default:
            return state
    }
};


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, datauth: {userId, email, login}});

export default reducerAuth;
