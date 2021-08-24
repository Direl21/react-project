import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://pbs.twimg.com/profile_images/651747266773000192/58WWLEO1_400x400.jpg" />
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;