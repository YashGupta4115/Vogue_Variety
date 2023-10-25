import Navigation from './routes/Navigation/navigation.component';
import Home from './routes/home/home.component';

import { Routes , Route } from 'react-router-dom';
import SignInForm from './Components/signIn/SignInFrom.component';

const Shop = ()=> { 
  return (
    <div>
      <h1>YOU ARE AT SHOP</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/auth' element={<SignInForm/>}/>
      </Route>
    </Routes>
  )  
}

export default App;
