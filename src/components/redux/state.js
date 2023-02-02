const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "hello",
          likeCount: 22,
          src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg",
        },
        {
          id: 2,
          message: "how are you?",
          likeCount: 33,
          src: "https://cs6.pikabu.ru/avatars/304/v304736.jpg",
        },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimas", src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
        { id: 2, name: "Oleg", src: "https://cs6.pikabu.ru/avatars/304/v304736.jpg" },
        { id: 3, name: "Alex", src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
        { id: 4, name: "Stas", src: "https://cs6.pikabu.ru/avatars/304/v304736.jpg" },
        { id: 5, name: "Natalia", src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
      ],
      messages: [
        { id: 1, message: "Hello", side: 'left' },
        { id: 2, message: "How r u?", side: 'right' },
        { id: 3, message: "Fine", side: 'left' },
        { id: 4, message: "Hello i found the new way that gives me another day of paradise", side: 'left' },
        { id: 5, message: "How r u?", side: 'right' },
        { id: 6, message: "Fine", side: 'left' },
      ],
      newMessageBody: '',
    },
    sideBar: {
      friends: [
        { id: 1, name: 'Andrew', src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
        { id: 2, name: 'Sasha', src: "https://cs6.pikabu.ru/avatars/304/v304736.jpg" },
        { id: 3, name: 'Sveta', src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
      ]
    },
  },





  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },



  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 10,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
        src: "https://cdn.fishki.net/upload/post/201504/12/1499123/04d028a08da16fb2cc0f7bdde9b558e8.jpg",
      }
      this._state.profilePage.newPostText = '';
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 7, message: body });
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }

  }
}



export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });
