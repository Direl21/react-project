import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} id={m.id}/>);
    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let mes = newMessageElement.current.value;
        props.updateNewMessageText(mes);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
                <div>
                    <button onClick={onAddMessage}>add</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;