
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JsonDisplay from './JsonDisplay';

describe('JsonDisplay', () => {
//   it('renders key-value pairs from data', () => {
//     const testData = {
//       key1: 'value1',
//       key2: 'value2',
//       key3: 'value3',
//     };

//     render(<JsonDisplay data={testData} />);

//     // Check if each key-value pair is rendered
//     Object.entries(testData).forEach(([key, value]) => {
//       const keyValueElement = screen.getByText(`${key}: ${value}`);
//       expect(keyValueElement).toBeInTheDocument();
//     });
//   });

  it('renders nothing when no data is provided', () => {
    render(<JsonDisplay data={null} />);

    // Check if there is no element with the class 'app-card-display-content'
    const displayContentElement = screen.queryByTestId('json-display-content');
    expect(displayContentElement).not.toBeInTheDocument();
  });

});
