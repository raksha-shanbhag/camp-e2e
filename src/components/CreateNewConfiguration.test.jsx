import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateNewConfiguration from './CreateNewConfiguration';

describe('CreateNewConfiguration', () => {
  it('renders the component', () => {
    const props = {
      open: true,
      handleClose: jest.fn(),
      handleSave: jest.fn(),
    };

    render(<CreateNewConfiguration {...props} />);

    // Check if the component renders without crashing
    expect(screen.getByText('Create new configuration')).toBeInTheDocument();
  });

  it('handles errors for blank fields submission', async () => {
    const props = {
      open: true,
      handleClose: jest.fn(),
      handleSave: jest.fn(),
    };

    render(<CreateNewConfiguration {...props} />);

    // Mocking functions
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});

    // Fill in form data
    // fireEvent.change(screen.getByLabelText(/Test Name/i), { target: { value: 'Test Name' } });
    // fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Description' } });
    // fireEvent.change(screen.getByLabelText(/ProductId Mapping/i), { target: { value: 'ProductId Mapping' } });
    // fireEvent.change(screen.getByLabelText(/BrandId Mapping/i), { target: { value: 'BrandId Mapping' } });
    // fireEvent.change(screen.getByLabelText(/CreditPolicyId/i), { target: { value: 'CreditPolicyId' } });

    // Mock the Papa.parse function
    jest.mock('papaparse', () => ({
      parse: jest.fn((file, config) => {
        config.complete({ data: [] }); // Mocking a successful parse
      }),
    }));

    // Submit the form
    fireEvent.click(screen.getByText('Save'));

    // check for form errors
    expect(screen.getByText('ERROR: Test name is required')).toBeInTheDocument();
    expect(screen.getByText('ERROR: Description is required')).toBeInTheDocument();
    expect(screen.getByText('ERROR: ProductId Mapping is required')).toBeInTheDocument();
    expect(screen.getByText('ERROR: BrandId Mapping is required')).toBeInTheDocument();
    expect(screen.getByText('ERROR: CreditPolicyID is required')).toBeInTheDocument();

    // Clean up
    consoleErrorSpy.mockRestore();
  });

  it('handles errors for blank file during form submission', async () => {
    const props = {
      open: true,
      handleClose: jest.fn(),
      handleSave: jest.fn(),
    };

    render(<CreateNewConfiguration {...props} />);

    // Mocking functions
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(() => {});

    // Fill in form data
    fireEvent.change(screen.getByLabelText(/Test Name/i), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Description' } });
    fireEvent.change(screen.getByLabelText(/ProductId Mapping/i), { target: { value: 'ProductId Mapping' } });
    fireEvent.change(screen.getByLabelText(/BrandId Mapping/i), { target: { value: 'BrandId Mapping' } });
    fireEvent.change(screen.getByLabelText(/CreditPolicyId/i), { target: { value: 'CreditPolicyId' } });

    // Mock the Papa.parse function
    jest.mock('papaparse', () => ({
      parse: jest.fn((file, config) => {
        config.complete({ data: [] }); // Mocking a successful parse
      }),
    }));

    // Submit the form
    fireEvent.click(screen.getByText('Save'));

    // Check if handleSave is called
    expect(props.handleSave).not.toHaveBeenCalled();

    // check for form errors
    expect(screen.getByText('ERROR: Mensa File is required')).toBeInTheDocument();

    // Clean up
    consoleErrorSpy.mockRestore();
  });


  it('handles form cancellation', () => {
    const props = {
      open: true,
      handleClose: jest.fn(),
      handleSave: jest.fn(),
    };

    render(<CreateNewConfiguration {...props} />);

    // Click the Cancel button
    fireEvent.click(screen.getByText('Cancel'));

    // Check if handleClose is called
    expect(props.handleClose).toHaveBeenCalled();
  });
});
