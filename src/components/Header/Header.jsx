import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiwWCpFc4gAmdCBNs4jdn04D0FyVDS8NtmA&usqp=CAU" />
        </header>
    );
}

export default Header;