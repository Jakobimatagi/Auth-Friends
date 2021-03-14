import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Components/Login'
import Logout from './Components/Logout';
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute'
function App() {
  return (
    <Router>
      <div className="App">
       <h1>F is for Friends</h1>
       
           
           <Logout />

           <Link to="/protected">Protected Page</Link>

           <Switch>
             <PrivateRoute exact path="/protected" component={Friends} />
             <Route path="/login" component={Login} />
             <Route component={Login} />
           </Switch>
         
      </div>
    </Router>
  );
}

export default App;
