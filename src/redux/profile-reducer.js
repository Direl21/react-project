const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 3 },
        { id: 2, message: 'It\'s my first post', likesCount: 6 },
        { id: 3, message: 'It\'s my second post', likesCount: 0 },
        { id: 4, message: 'It\'s my second post', likesCount: 10 },
        { id: 5, message: 'It\'s my second post', likesCount: 4 }
    ],
    newPostText: 'blablabla',
    profile: null
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: 
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;