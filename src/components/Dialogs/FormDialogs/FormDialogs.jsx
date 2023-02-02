import s from "./FormDialogs.module.css";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/state";

const FormDialogs = (props) => {
  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };
  return (
    <div className={s.formDialogs}>
      <div>
        <textarea
          placeholder="введите сообщение"
          onChange={onNewMessageChange}
          value={props.newMessageBody}
        />
      </div>
      <div>
        <button onClick={onSendMessageClick}>add post</button>
      </div>
    </div>
  );
};

export default FormDialogs;
