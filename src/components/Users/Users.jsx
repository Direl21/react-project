import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpeg';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>

        <div>
            {pages.map(p => {
                return <span className={this.props.currentPage === p && classes.selectPage}>{p}</span> 
            })}
        </div>

        {
            this.props.users.map (u => <div className={classes.pad} key={u.id}>
                <span>
                    <div className={classes.uPhoto}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => (this.props.unfollow(u.id))} > unfollow</button> : <button onClick={() => (this.props.follow(u.id))} > follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>

                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>)
        }
    </div>
    }
}

export default Users;