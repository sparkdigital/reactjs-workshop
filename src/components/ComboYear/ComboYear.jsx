import React from 'react';

const ComboYear = ({ currentYear, year }) => {

  const options = [0, 1, 2, 3].map(plusYears => {
    return (
      <option 
        key={currentYear + plusYears}
        value={currentYear + plusYears}
      >
        {currentYear + plusYears}
      </option>
    );
  });

  return (
    <select 
      value={year}
    >
      {options}
    </select>
  );
}

ComboYear.defaultProps = {
  currentYear: new Date().getFullYear(),
  year: new Date().getFullYear()
}

export default ComboYear;
