const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 3 },
        { id: 2, message: 'It\'s my first post', likesCount: 6 },
        { id: 3, message: 'It\'s my second post', likesCount: 0 },
        { id: 4, message: 'It\'s my second post', likesCount: 10 },
        { id: 5, message: 'It\'s my second post', likesCount: 4 }
    ],
    newPostText: 'blablabla'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost ]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: 
            return state;
    }
}

export default profileReducer;