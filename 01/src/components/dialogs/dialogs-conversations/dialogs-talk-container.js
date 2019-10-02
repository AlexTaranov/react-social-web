import React from "react"
import {addMsgActionCreator, updateNewMsgTextActionCreator} from "../../../redux/reducer-dialogs";
import DialogsTalk from "./dialogs-talk";
import {connect} from "react-redux";



let dialogsStateToProps = (state) => {
  return {
      msgs: state.messegesPage.messageData,
      newMsgText: state.messegesPage.newMsgText
  }
};

let dialogsDispatchToProps = (dispatch) => {
    return {
        onMsgChange: (text) => {
            let action = updateNewMsgTextActionCreator(text);
            dispatch(action);
        },
        addMsg: () => {
            dispatch(addMsgActionCreator());
        }
    }
}

const DialogsTalkContainer = connect(dialogsStateToProps, dialogsDispatchToProps)(DialogsTalk);

export default DialogsTalkContainer;
