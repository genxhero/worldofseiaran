import React from 'react';
import {withRouter} from 'react-router';

const Region = (props) => {
    const {region} = props;
    return (
        <div className="region-detail-page">
        <h1 className="region-page-title">{region.name}</h1>
        <p className="region-paragraph">
            {region.overview}
        </p>
        <h2 className="region-section-title"> Locales</h2>
        {region.locales.map(locale => {
            return (
                <div className="region-nation" key={locale.name}> 
                  <h3 className="region-subsection-title"> {locale.name}</h3>
                  <p className="region-nation-overview">
                      {locale.overview} 
                  </p>
                <div className="region-nation-subsection">
                    <h4 className="region-nation-subsection-title">Places</h4>
                    {locale.places.map(place => {
                        return (
                            <p className="region-nation-subsection-body" key={place.name}> <span className="bold">{place.name}:</span> {place.description}</p>
                        )
                    })}
               </div>
               <div className="region-nation-subsection">
                    <h4 className="region-nation-subsection-title">People</h4>
                    {locale.people.map(person => {
                        return (
                            <p className="region-nation-subsection-body" key={person.name}> <span className="bold">{person.name}:</span> {person.description}</p>
                        )
                    })}
               </div>
            </div>
            )
        })}


    </div>
    )
}

export default Region;