import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import FormDialogs from "./FormDialogs/FormDialogs";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d, index) => (
    <DialogItem key={index} id={d.id} name={d.name} src={d.src} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m, index) => (
    <Message key={index} message={m.message} side={m.side} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <FormDialogs
          newMessageBody={props.dialogsPage.newMessageBody}
          dispatch={props.dispatch}
        />
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
