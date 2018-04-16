import React from 'react';

const DealershipResult = ({dealership, onDealershipSelect,id}) => {

    const { name, address_line1, address_line2, postcode } = dealership;

    // Push dealership ID into the object
    dealership.id = id;
    return (
      <li data-id={id} onClick={() => onDealershipSelect(dealership)} className="result-item">
        <div className="result-item__id"><span>{id}</span></div>
        <div className="result-item__name">{name}</div>
        <div className="result-item__address1">{address_line1}</div>
        <div className="result-item__address2">{address_line2}</div>
        <div className="result-item__postcode">{postcode}</div>
      </li>
    )
}

export default DealershipResult;
