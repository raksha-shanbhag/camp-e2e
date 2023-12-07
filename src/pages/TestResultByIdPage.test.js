import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import '@testing-library/jest-dom/extend-expect';

import TestResultByIdPage from './TestResultByIdPage';

// Mock any API calls or dependencies as needed

describe('TestResultByIdPage component', () => {
    it('renders the component with default tests', () => {
        render(
            <BrowserRouter> 
                <TestResultByIdPage />
            </BrowserRouter>,
        );

        expect(screen.getByText('Payload')).toBeInTheDocument();
        expect(screen.getByText('< Back')).toBeInTheDocument();
    });

    it('renders the page with header', () => {
        render(
            <BrowserRouter>
                <TestResultByIdPage />
            </BrowserRouter>,
        );

        const footerElements = screen.getAllByTestId("app-header-title");
        expect(footerElements).toHaveLength(1); 
    });
});
