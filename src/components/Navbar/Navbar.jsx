import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Sitebar from './Sitebar/Sitebar';

const Navbar = (props) => {
    let state = props.sitebar;

    let sitebarElements = state.onlineFriends.map(s => <Sitebar name={s.name} key={s.id} id={s.id} />);

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>My Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Massages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/photos" activeClassName={classes.active}>Photos</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
                <div className={classes.sitebarItem}>
                    {sitebarElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;