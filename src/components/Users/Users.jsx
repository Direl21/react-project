import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpeg';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

        let pages = [];

        let endPage;
        let startPage;

        startPage = 1;
        endPage = pagesCount;

        if((props.currentPage) >= (startPage + 6)){
            pages.push(1);
        }
        if((props.currentPage) >= (startPage + 7)){
            pages.push('...');
        }

        for (let i=1; i <= pagesCount; i++) {
            if( props.currentPage <= (i+5) && props.currentPage >= (i-5))
            pages.push(i);
        }

        if((props.currentPage) <= (endPage - 7)){
            pages.push('...');
        }
        if((props.currentPage) <= (endPage - 6)){
            pages.push(pagesCount);
        }
    return (

        <div>

            <div className={classes.cursor}>
                {pages.map(p =>  {
                    if (typeof p == 'number' ) {
                        return <span className={`${classes.pagItem} ${props.currentPage === p ? classes.selectPage : ''}`}
                            onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                    } else {
                        return <span className={`${classes.pagDot} ${props.currentPage === p ? classes.selectPage : ''}`}>{p}</span>
                    }
                })}
            </div>
            <div className={classes.list}>
                {
                    props.users.map(u => <div className={classes.pad} key={u.id}>
                        <span>
                            <div className={classes.uPhoto}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => (props.unfollow(u.id))} > unfollow</button> : <button onClick={() => (props.follow(u.id))} > follow</button>}
                            </div>
                        </span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;