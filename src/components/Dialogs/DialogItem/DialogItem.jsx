import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340" />
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;