const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let stateInitial = {
    dialogsData: [
        {idAuthor: 1, nameauthor: 'Valera'},
        {idAuthor: 2, nameauthor: 'Petro'},
        {idAuthor: 3, nameauthor: 'Alexander'},
        {idAuthor: 4, nameauthor: 'Vasiliy'},
    ],
    messageData: [
        {
            authorava: 'https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg',
            authorname: 'Valera',
            authormsg: 'Hello its my message for you!'
        },
        {
            authorava: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
            authorname: 'Me',
            authormsg: 'Hey, men! Nice to meet you.'
        },
    ],
    newMsgText: 'Hello!'
};

const reducerDialogs = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_MSG: {
            let newMsg = {
                authorava: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
                authorname: 'Me',
                authormsg: state.newMsgText,
            };
            let copyState = {...state};
            copyState.messageData = [...state.messageData];
            copyState.messageData.push(newMsg);
            copyState.newMsgText = '';
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state};
            copyState.newMsgText = action.newText;
            return copyState;
        }
        default:
            return state;
    }
}


export const addMsgActionCreator = () => {return {type: ADD_MSG}};

export const updateNewMsgTextActionCreator = (text) => {return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}};

export default reducerDialogs;
