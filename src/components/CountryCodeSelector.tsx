import React, { useState } from 'react';
import countryCodes from '../app/api/data/CountryCodes.json'; // Adjust the path as necessary

interface CountryCodeSelectorProps {
  onSelect: (code: string) => void;
}

const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({ onSelect }) => {
  const [selectedCode, setSelectedCode] = useState('+91');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value;
    setSelectedCode(code);
    onSelect(code);
  };

  return (
    <select value={selectedCode} onChange={handleChange} className="w-16 h-7 border rounded py-1 text-black text-xs">
      {countryCodes.map((country) => (
        <option key={country.code} value={country.dial_code}>
          ({country.dial_code})
        </option>
      ))}
    </select>
  );
};

export default CountryCodeSelector; 