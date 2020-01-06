import React, {useState} from 'react';
import Midlands from './regions/Midlands';
import CrescentCoast from './regions/CrescentCoast';
import {withRouter} from 'react-router';
import REGIONS from './regions/regions';
import Region from './regions/Region';

// const pages = {"midlands": <Midlands />, "crescentcoast": <CrescentCoast />}
const pages = REGIONS;
const Regions = () => {
    const [currentRegion, setRegion] = useState("crescentcoast");
    const selectRegion = (event) =>{
        const region = event.target.getAttribute("name")
        setRegion(region);
     }

    return (
    <div className="regions-page">
        <div className="regions-nav">
        <h1>Regions Index</h1>
            <span className={`regions-navlink-${currentRegion === "midlands" ? "active" : "inactive"}`} 
              name="midlands"
              onClick={selectRegion}>
                  Midlands
            </span>
            <span className={`regions-navlink-${currentRegion === "crescentcoast" ? "active" : "inactive"}`} 
              name="crescentcoast"
              onClick={selectRegion}>
                  Crescent Coast
            </span>
        </div>
        <div className="region-content">
          <Region region={pages[currentRegion]}/>
        </div>
    </div>
    )
  
   
}

export default withRouter(Regions);