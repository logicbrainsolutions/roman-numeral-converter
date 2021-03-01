import React, { useState } from 'react';

import ConverterForm from './ConverterForm';
import ConvertedValuesList from './ConvertedValuesList';
import { fromRoman, toRoman } from '../../helpers/RomanNumerals'

const Converter = () => {
  const [convertedValues, setConvertedValues] = useState([]);

  const convertToRomanHandler = userInput => {
    const roman = toRoman(userInput.value);
    setConvertedValues(prevConversions => [
      { id: Math.random().toString(), number: userInput.value, roman: roman },
      ...prevConversions

    ]);
  };

  const convertToNumberHandler = userInput => {
    const numberValue = fromRoman(userInput.value);
    setConvertedValues(prevConversions => [
      { id: Math.random().toString(), number: numberValue, roman: userInput.value },
      ...prevConversions
      
    ]);
  };

  return (
    <div className="App">
      <ConverterForm
        onConvertToRoman={convertToRomanHandler}
        onConvertToNumber={convertToNumberHandler}
      />

      <section>
        <ConvertedValuesList conversions={convertedValues} onRemoveItem={() => { }} />
      </section>
    </div>
  );
};

export default Converter;
