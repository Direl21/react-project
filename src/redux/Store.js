import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 3 },
                { id: 2, message: 'It\'s my first post', likesCount: 6 },
                { id: 3, message: 'It\'s my second post', likesCount: 0 },
                { id: 4, message: 'It\'s my second post', likesCount: 10 },
                { id: 5, message: 'It\'s my second post', likesCount: 4 }
            ],
            newPostText: 'blablabla'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Janna' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Kata' },
                { id: 4, name: 'Bard' },
                { id: 5, name: 'Lulu' }
            ],
            messages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'This day is butiful!' },
                { id: 3, message: 'How are you?' }
            ],
            newMessageText: 'jjkjkjkj'
        },
        sitebar: {
            onlineFriends: [
                { id: 1, name: 'Kata' },
                { id: 2, name: 'Bard' },
                { id: 3, name: 'Lulu' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);
        
        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => ({
        type: ADD_POST
    })

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })


export const addMessageActionCreator = () => ({
        type: ADD_MESSAGE
    })

export const updateNewMessageTextActionCreator = (mes) => ({
        type: UPDATE_NEW_MESSAGE_TEXT, newDia: mes
    })

window.state = store;


export default store;