import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import { history } from './utils/history'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ClientProfile from './pages/ClientProfile'
import Order from './pages/Order'
import RestaurantProfile from './pages/RestaurantProfile'



function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/signup'>
          <SignUp/>
        </Route>
        <Route exact path='/signin'>
          <SignIn/>
        </Route>
        <Route exact path='/clientprofile'>
          <ClientProfile/>
        </Route>
        <Route exact path='/restaurantprofile'>
          <RestaurantProfile/>
        </Route>
        <Route exact path='/order'>
          <Order/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
