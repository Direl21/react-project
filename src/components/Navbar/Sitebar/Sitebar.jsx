import React from 'react';
import classes from './../Navbar.module.css';

const Sitebar = (props) => {
    return (
        <div className={classes.site}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NPt3ertlFy4zRdCLCLKGcr840wYUfPlXRvDWllPCxcIJqUwIzaCOubm3rVO8-aQpObM&usqp=CAU" />
            {props.name}
        </div>
    );
}

export default Sitebar;