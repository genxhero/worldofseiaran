import React, {useState} from 'react';
import Midlands from './regions/Midlands';
import CrescentCoast from './regions/CrescentCoast';
import {withRouter} from 'react-router';

const pages = [<Midlands />, <CrescentCoast />]

const Regions = () => {
    const [currentRegion, setRegion] = useState(0);
    <div className="regions-page">
        <h1>Regions Index</h1>
        {pages[currentRegion]}
    </div>
   
}

export default withRouter(Regions);