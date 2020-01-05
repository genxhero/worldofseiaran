import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Welcome from './components/Welcome';
import Regions from './components/Regions';
import {createHashHistory} from 'history';

const history = createHashHistory();


const App = () => {
    return(
         <BrowserRouter history={history}>
             <Switch>
               <Route exact path="/" component={Welcome} />
               <Route path = "/regions" component={Regions} />
             </Switch>

        </BrowserRouter>)
}

export default App;