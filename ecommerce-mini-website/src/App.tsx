import React from 'react';
import Header from './components/Header';
import Goods from './components/Goods';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Goods/>
    </Provider>
  
  );
  
}

export default App;
