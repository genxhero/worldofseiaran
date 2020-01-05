import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

const Regions = () => {
    <Switch>
        <Route exact path = "/regions/crescentcoast" component={CrescentCoast} />
        <Route exact path = "/regions/midlands" component={Midlands} />

    </Switch>
}

export default Regions;