import React, {useState} from 'react';
import Midlands from './regions/Midlands';
import CrescentCoast from './regions/CrescentCoast';
import {withRouter} from 'react-router';

const pages = {"midlands": <Midlands />, "crescentcoast": <CrescentCoast />}

const Regions = () => {
    const [currentRegion, setRegion] = useState("midlands");

    return (
    <div className="regions-page">
        <h1>Regions Index</h1>
        <div className="region-content">
          {pages[currentRegion]}
        </div>
    </div>
    )
  
   
}

export default withRouter(Regions);