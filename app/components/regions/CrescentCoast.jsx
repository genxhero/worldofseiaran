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
        <h3 className="region-subsection-title"> Dukedom of St. Tevas</h3>

    </div>
    )
}

export default withRouter(CrescentCoast);