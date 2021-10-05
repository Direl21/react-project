import React from 'react';
import Preloder from '../../common/Preloder';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloder />
    }
    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/vVu7XprxSayr867oA3KQ_bigstock-Colorful-fruit-pattern-of-fres-282127069.jpg" />
            </div>
            <div>
                <img src={props.profile.photos.large} />
                <div>
                    About me
                </div>
                <p>{props.profile.aboutMe}</p>
            </div>
         </div>
    );
}

export default ProfileInfo;