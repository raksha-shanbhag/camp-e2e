import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import JsonTreeViewer from './JsonTreeViewer';

describe('JsonTreeViewer component', () => {
    it('renders the component with JSON data', () => {
      const testData = {
        key1: 'value1',
        key2: {
          nestedKey: 'nestedValue',
        },
      };
  
      render(<JsonTreeViewer data={testData} />);
  
      // Use regular expression to match text content
      expect(screen.getByText(/key1/)).toBeInTheDocument();
      expect(screen.getByText(/value1/)).toBeInTheDocument();

      // sub keys should be hidden and allowed to expand
      expect(screen.queryByText(/nonexistentText/)).not.toBeInTheDocument();
      expect(screen.queryByText(/nonexistentText/)).not.toBeInTheDocument();
    });
  });