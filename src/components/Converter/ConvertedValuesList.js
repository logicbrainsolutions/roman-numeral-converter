import React from 'react';

import './ConvertedValuesList.css';

const ConvertedValuesList = props => {
  return (
    <section className="converted-values-list">
      <h2>Converted Values</h2>
      <ul>
        {props.conversions.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.number}</span>
            <span>{ig.roman}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ConvertedValuesList;
