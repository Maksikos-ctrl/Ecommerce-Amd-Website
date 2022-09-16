import React from 'react';
import Header from '../header/Header';
import Goods from '../allGoods/Goods';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Spinner from '../spinner/Spinner';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner/>} persistor={persistStore(store)}>
        <Header/>
        <Goods/>
      </PersistGate>
    </Provider>
  
  );
  
}

export default App;
