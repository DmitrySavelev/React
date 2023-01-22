import reportWebVitals from './reportWebVitals';
import store from './components/redux/state';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
        // dispatch={store.dispatch.bind(store)}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          addPostDialogs={store.addPostDialogs.bind(store)}
          updateNewPostTextDialogs={store.updateNewPostTextDialogs.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();