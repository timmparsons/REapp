import React from 'react';

const RealEstateSearch = (props) => {
  return(
    <div>
      <ul>
        {props.address.map((property, index) => <li key={index}>{property.address.oneLine.toString()}</li>)}
      </ul>
    </div>   
  )
}

export default RealEstateSearch;