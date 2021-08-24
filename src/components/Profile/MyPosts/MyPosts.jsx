import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/Store';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount} /> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                My post
        </div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <button onClick={onAddPost}>Post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;