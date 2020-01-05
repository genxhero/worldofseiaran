import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Welcome from './components/Welcome';
import Regions from './components/Regions';
import { createHashHistory } from 'history';

const history = createHashHistory();



const App = () => {
    return(
         <BrowserRouter history={history}>
             <Switch>
               <Route path='/regions' component={Regions} />
               <Route exact path='/' component={Welcome} />
             </Switch>

        </BrowserRouter>)
}

export default App;