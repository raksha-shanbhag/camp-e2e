import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import '@testing-library/jest-dom/extend-expect';

import HomePage from './HomePage';

// Mock any API calls or dependencies as needed

describe('HomePage component', () => {
    it('renders the component with default tests', () => {
        render(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>,
        );

        expect(screen.getByText('Test Configurations')).toBeInTheDocument();
        expect(screen.getByText('+ Create New Configuration')).toBeInTheDocument();

    });

    it('renders the page with header', () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>,
        );

        const footerElements = screen.getAllByTestId("app-header-title");
        expect(footerElements).toHaveLength(1); 
    });
});
