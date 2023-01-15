let store = {
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
        { id: 1, message: "Hello i found the new way that gives me another day of paradise", side: 'left' },
        { id: 2, message: "How r u?", side: 'right' },
        { id: 3, message: "Fine", side: 'left' },
      ],
      newPostText: '',
    },
    sideBar: {
      friends: [
        { id: 1, name: 'Andrew', src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
        { id: 2, name: 'Sasha', src: "https://cs6.pikabu.ru/avatars/304/v304736.jpg" },
        { id: 3, name: 'Sveta', src: "https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg", },
      ]
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 10,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
      src: "https://cdn.fishki.net/upload/post/201504/12/1499123/04d028a08da16fb2cc0f7bdde9b558e8.jpg",
    }
    this._state.profilePage.newPostText = '';
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addPostDialogs() {
    let newPost =
      { id: 11, message: this._state.dialogsPage.newPostText, side: 'right' }
    this._state.dialogsPage.newPostText = '';
    this._state.dialogsPage.messages.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPostTextDialogs(newText) {
    this._state.dialogsPage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export default store;

window.store = store;