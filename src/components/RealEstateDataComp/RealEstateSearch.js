import React from 'react';
import './RealEstateStyles.css'


function RealEstateSearch(props) {
  return(
    <div>
      <ul>
        {props.address.map((property, index) => <li key={index} className="listStyles">{property.address.oneLine.toString()}</li>)}
      </ul>
    </div>   
  )
}

export default RealEstateSearch;