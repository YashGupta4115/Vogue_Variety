import Authentiaction from './Components/Authentication/authentication.component';
import Navigation from './routes/Navigation/navigation.component';
import Home from './routes/home/home.component';

import { Routes , Route } from 'react-router-dom';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/auth' element={<Authentiaction/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  )  
}

export default App;
