import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import '@testing-library/jest-dom/extend-expect';

import TestResultsPage from './TestResultsPage';

// Mock any API calls or dependencies as needed

describe('TestResultsPage component', () => {
    it('renders the component with default tests', () => {
        render(
            <BrowserRouter>
                <TestResultsPage />
            </BrowserRouter>,
        );

        const footerElements = screen.getAllByTestId("app-card-display-footer-link");
        expect(footerElements.length).toBeGreaterThanOrEqual(1); 
        expect(screen.getByText('< Back')).toBeInTheDocument();
  
    });

    it('renders the page with header', () => {
        render(
            <BrowserRouter>
                <TestResultsPage />
            </BrowserRouter>,
        );

        const footerElements = screen.getAllByTestId("app-header-title");
        expect(footerElements).toHaveLength(1); 
    });
});
