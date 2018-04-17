import React from 'react';
import DealershipResult from './DealershipResult'

const DealershipResults = props => {
  const dealerships = props.dealership.map((dealership, index) => {

    return (
      <DealershipResult
        id={index + 1}
        key={index}
        onDealershipSelect={props.onDealershipSelect}
        dealership={dealership}
      />
    )
  });
  return (
    <ul>
      {dealerships}
    </ul>
  );

}
export default DealershipResults;