import React from 'react';

const JsonDisplay = ({ data }) => {
  return (
    <div className='app-card-display-content'>
      {data && Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default JsonDisplay;