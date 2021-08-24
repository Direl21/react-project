import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/Store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (mes) => {
            dispatch(updateNewMessageTextActionCreator(mes))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 


export default DialogsContainer;