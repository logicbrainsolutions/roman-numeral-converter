import React, { useState } from 'react';

import Card from '../UI/Card';
import './ConverterForm.css';
import { isRoman } from '../../helpers/RomanNumerals'

const ConverterForm = React.memo(props => {
  const [enteredValue, setEnteredValue] = useState('');

  const convertToRomanHandler = event => {
    event.preventDefault();
    if(isNaN(enteredValue))
      return;
    props.onConvertToRoman({ value: enteredValue });
  };
  const convertToNumberHandler = event => {
    event.preventDefault();
    if(!isRoman(enteredValue))
      return;
    props.onConvertToNumber({ value: enteredValue });
  };

  return (
    <section className="converter-form">
      <Card>
          <h1>Roman Numerals Converter</h1>
          <div className="form-control">
            <label htmlFor="amount">Please enter value to convert: </label>
            <input
              id="amount"
              value={enteredValue}
              onChange={event => {
                setEnteredValue(event.target.value);
              }}
            />
          </div>
          <div className="converter-form__actions">
            <button onClick={convertToRomanHandler}>Convert To Roman</button>
            <button onClick={convertToNumberHandler}>Convert To Number</button>
          </div>
        
      </Card>
    </section>
  );
});

export default ConverterForm;
