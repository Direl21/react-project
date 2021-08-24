const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMes = {
                id: 4,
                message: state.newMessageText,
            };
            return {
                ...state,
                messages:[...state.messages, newMes],
                newMessageText: '',
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newDia
            }
        }
        default:
             return state;
    }
}

export default dialogsReducer;