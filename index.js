import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

//const myFirstElement = <h1>Hello React!</h1>

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);*/

const store = createStore(rootReducer);

ReactDOM.render(
  // 将应用程序包装在Provider中，并传入Redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
