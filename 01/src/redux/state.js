import {rerenderPage} from "../render";

let appState = {
    profilePage: {
        postData: [
            {idPost: 1, message: 'Hello, its my first Post?', likesCount: "32", avatar: 'http://gameszon.net/content/cats-img/avatar3.png'},
            {idPost: 2, message: 'Very good', likesCount: "25", avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'},
            {idPost: 3, message: 'Very good 2222', likesCount: "31", avatar: 'http://gameszon.net/content/cats-img/avatar3.png'}
        ],
        profileData: [
            {profileName: 'Alexander Taranov', profileInterest: 'Cars?', profilePosition: "FE DEV", profileAvatar: 'http://www.spletnik.ru/img/__post/68/68cd2b706c1fe59dc8df7e58a1655546_300.jpg'}
        ]
    },
    messegesPage: {
        dialogsData: [
            {idAuthor: 1, nameauthor: 'Valera'},
            {idAuthor: 2, nameauthor: 'Petro'},
            {idAuthor: 3, nameauthor: 'Alexander'},
            {idAuthor: 4, nameauthor: 'Vasiliy'},
        ],
        messageData: [
            {authorava: 'https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg', authorname: 'Valera', authormsg: 'Hello its my message for you!'},
            {authorava: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg', authorname: 'Me', authormsg: 'Hey, men! Nice to meet you.'},
        ]
    },
    sidebarData: {
        sidebarFriends: [
            {id: 1, link: '#', avatar: 'https://materiell.com/wp-content/uploads/2015/04/deven-small1.png', name: 'Alex1'},
            {id: 2, link: '#', avatar: 'https://materiell.com/wp-content/uploads/2015/04/deven-small1.png', name: 'Alex2'},
            {id: 3, link: '#', avatar: 'https://materiell.com/wp-content/uploads/2015/04/deven-small1.png', name: 'Alex3'},
            {id: 4, link: '#', avatar: 'https://materiell.com/wp-content/uploads/2015/04/deven-small1.png', name: 'Alex4'}
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        idPost: 5,
        message: postMessage,
        likesCount: '24',
        avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'
    }
    appState.profilePage.postData.push(newPost);

    rerenderPage(appState);
};

export default appState;
