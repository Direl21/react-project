import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        sitebar: state.sitebar,
        onlineFriends: state.onlineFriends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;