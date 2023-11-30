import React from 'react';

const JsonDisplay = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default JsonDisplay;