import Authentiaction from './Components/Authentication/authentication.component';
import Navigation from './routes/Navigation/navigation.component';
import Home from './routes/home/home.component';

import { Routes , Route } from 'react-router-dom';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/auth' element={<Authentiaction/>}/>
      </Route>
    </Routes>
  )  
}

export default App;
