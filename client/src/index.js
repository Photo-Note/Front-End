import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import reducer from "./reducers";
// import {
//   createFirestoreInstance,
//   reduxFirestore,
//   getFirestore
// } from "redux-firestore";
// import { ReactReduxFirebaseProvider, getFireBase } from "react-redux-firebase";
// import fbConfig from "./config/fbconfig.js";
// import firebase from "firebase/app";

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFireBase, getFirestore })),
//     reduxFirestore(firebase, fbConfig)
//   )
// );

// const rrfProps = {
//   firebase,
//   config: fbConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   rootElement
// );
