import './App.css';
import { useState } from 'react';
import ProductList from './Components/ProductList';

import * as rawData from './data/data.json'
import StoreContext from './Context';


function App() {

  const [data, setData] = useState(rawData.default)
  
  return (
    <div className="App">
     <StoreContext.Provider value={{data, setData}}>
        <ProductList  />
     </StoreContext.Provider>
    </div>
  );
}

export default App;
