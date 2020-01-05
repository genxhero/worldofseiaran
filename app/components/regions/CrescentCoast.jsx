import React from 'react';
import {withRouter} from 'react-router';


const CrescentCoast = () => {
    return( 
    <div className="region-detail-page">
        <h1 className="region-page-title">The Crescent Coast</h1>
        <p clasName="region-paragraph">
            The Crescent Coast is the name given to a large roughly 
            crescent moon shaped bay 
            (some call it a sea) and the surrounding lands.
        </p>
        <h2 className="region-section-title"> Nations</h2>
        <h3 className="region-subsection-title"> Gaille</h3>
        <p className="region-nation-overview"> 
            The most prosperous kingdom on the Crescent Coast, it was founded in the early days of the Fourth Age by heroes tasked with mopping up what was left of The Dragon Empress' forces.  The symbol of Gaille is a winged rapier over a sky blue background.  
        </p>
        <h4 className="region-nation-subsection-title">Places</h4>
        <p className="region-nation-subsection-body"> <span className="bold">Loupblanc:</span> Capitol of Gaille, offcially, though the coastal city of Parseilles is more influential.  The city is shrouded in mystery, with fog-choked streets, haunting architecture, and sightings of terrible creatures that are more than just rumors.</p>
        <p className="region-nation-subsection-body"> <span className="bold"> Parseilles:</span>  Cultural and trade center of Gaille. It was built on and around the mouth of the White River.  The Cascading Palace is an architectual marvel to behold.  </p>

        <h4 className="region-nation-subsection-title">People</h4>
        <p className="region-nation-subsection-body"></p>

        <h3 className="region-subsection-title"> Dukedom of St. Tevas</h3>
        <p className="region-nation-overview"> </p>
        <h4 className="region-nation-subsection-title">Places</h4>
        <p className="region-nation-subsection-body"></p>
        <h4 className="region-nation-subsection-title">People</h4>
        <p className="region-nation-subsection-body"></p>

        <h3 className="region-subsection-title"> Dragonlands</h3>
        <p className="region-nation-overview"> </p>
        <h4 className="region-nation-subsection-title">Places</h4>
        <p className="region-nation-subsection-body"></p>
        <h4 className="region-nation-subsection-title">People</h4>
        <p className="region-nation-subsection-body"></p>

        <h3 className="region-subsection-title"> Port Crescent</h3>
        <p className="region-nation-overview"> </p>
        <h4 className="region-nation-subsection-title">Places</h4>
        <p className="region-nation-subsection-body"></p>
        <h4 className="region-nation-subsection-title">People</h4>
        <p className="region-nation-subsection-body"></p>

        <h3 className="region-subsection-title"> Radiant Citadel</h3>
        <p className="region-nation-overview"> </p>
        <h4 className="region-nation-subsection-title">Places</h4>
        <p className="region-nation-subsection-body"></p>
        <h4 className="region-nation-subsection-title">People</h4>
        <p className="region-nation-subsection-body"></p>



    </div>
    )
}

export default withRouter(CrescentCoast);