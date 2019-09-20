const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const reducerDialogs = (state, action) => {
    switch (action.type) {
        case ADD_MSG:
            let newMsg = {
                authorava: 'https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg',
                authorname: 'Me',
                authormsg: state.newMsgText
            }
            state.messageData.push(newMsg);
            state.newMsgText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMsgText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addMsgActionCreator = () => {
    return {type: ADD_MSG}
};

export const updateNewMsgTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
};

export default reducerDialogs;
