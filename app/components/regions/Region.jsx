import React from 'react';
import {withRouter} from 'react-router';

const Region = (props) => {
    const {region} = props;
    debugger;
    return (
        <div className="region-detail-page">
        <h1 className="region-page-title">{region.name}</h1>
        <p clasName="region-paragraph">
            {region.overview}
        </p>
        <h2 className="region-section-title"> Locales</h2>
        <div className="region-nation">
            
            <h3 className="region-subsection-title"> Gaille</h3>
            <p className="region-nation-overview"> 
                The most prosperous kingdom on the Crescent Coast, it was founded in the early days of the Fourth Age by heroes tasked with mopping up what was left of The Dragon Empress' forces.  The symbol of Gaille is a winged rapier over a sky blue background.  
            </p>
            <div className="region-nation-subsection">
                <h4 className="region-nation-subsection-title">Places</h4>
                <p className="region-nation-subsection-body"> <span className="bold">Loupblanc:</span> Capitol of Gaille, offcially, though the coastal city of Parseilles is more influential.  The city is shrouded in mystery, with fog-choked streets, haunting architecture, and sightings of terrible creatures that are more than just rumors.</p>
                <p className="region-nation-subsection-body"> <span className="bold"> Parseilles:</span>  Cultural and trade center of Gaille. It was built on and around the mouth of the White River.  The Cascading Palace is an architectual marvel to behold.  </p>
            </div>

            <div className="region-nation-subsection">
                 <h4 className="region-nation-subsection-title">People</h4>
                 <p className="region-nation-subsection-body"><span className="bold">Gabrielle Carmanet</span></p>
                 <p className="region-nation-subsection-body"><span className="bold">Poppy Greenbottle</span></p>
                 <p className="region-nation-subsection-body"><span className="bold">Guillarme</span></p>

            </div>
            
        </div>







    </div>
    )
}