import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import TodoStore from './store/TodoStore';

const store = new TodoStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
