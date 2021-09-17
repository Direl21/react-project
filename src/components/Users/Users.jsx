import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.jpeg';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        let endPage;
        let startPage;

        startPage = 1;
        endPage = pagesCount;

        if((this.props.currentPage) >= (startPage + 6)){
            pages.push(1);
        }
        if((this.props.currentPage) >= (startPage + 7)){
            pages.push('...');
        }

        for (let i=1; i <= pagesCount; i++) {
            if( this.props.currentPage <= (i+5) && this.props.currentPage >= (i-5))
            pages.push(i);
        }

        if((this.props.currentPage) <= (endPage - 7)){
            pages.push('...');
        }
        if((this.props.currentPage) <= (endPage - 6)){
            pages.push(pagesCount);
        }

        return <div>
        
        <div className={classes.cursor}>
            {pages.map(p => {
                    if(typeof p == 'number'){
                    return <span className={`${classes.pagItem} ${this.props.currentPage === p ? classes.selectPage : ''}`}
                onClick={ (e) => {this.onPageChanged(p); } }>{p}</span>
            } else {
                return <span className={`${classes.pagDot} ${this.props.currentPage === p ? classes.selectPage : ''}`}>{p}</span>
            }
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