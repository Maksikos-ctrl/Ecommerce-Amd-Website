import React from 'react';
import Header from '../header/Header';
import Goods from '../allGoods/Goods';
import { Provider } from 'react-redux';
import store from '../../store/store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Goods/>
    </Provider>
  
  );
  
}

export default App;
