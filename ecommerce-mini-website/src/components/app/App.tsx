import {useState} from 'react';
import Header from '../header/Header';
import Goods from '../allGoods/Goods';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Spinner from '../spinner/Spinner';
import Footer from '../footer/Footer';
import goods from '../../data/goods';


function App() {
   
  const [query, setQuery] = useState('');

  console.log('Hi world',query);


  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner/>} persistor={persistStore(store)}>
        <Header query={query} handleChange={setQuery}/>
        <Goods query={query} />
        <Footer/>
      </PersistGate>
    </Provider>
  
  );
  
}

export default App;
