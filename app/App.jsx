import React from 'react';
import { Switch, Route, Router, BrowserRouter} from 'react-router-dom';
import Welcome from './components/Welcome';
import Regions from './components/Regions';
import { createHashHistory } from 'history';

const history = createHashHistory();



const App = () => {
    return(
         <Router history={history}>
             <Switch>
               <Route path='/regions' component={Regions} />
               <Route exact path='/' component={Welcome} />
             </Switch>

        </Router>)
}

export default App;