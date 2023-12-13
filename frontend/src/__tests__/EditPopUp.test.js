/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import EditPopup from '../components/EditPopUp';

describe('EditPopup Component', () => {
    const mockImageSrc = 'test.jpg';
    const mockTitle = 'Test Title';
    const mockUpdate = jest.fn();
    const mockCancel = jest.fn();

    it('renders EditPopup with provided image source and title', () => {
        const { getByAltText, getByDisplayValue } = render(
            <EditPopup imageSrc={mockImageSrc} title={mockTitle} onUpdate={mockUpdate} onCancel={mockCancel} />
        );

        const imageElement = getByAltText('Edited');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.src).toContain(mockImageSrc);

        const titleInput = getByDisplayValue(mockTitle);
        expect(titleInput).toBeInTheDocument();
    });

    it('updates edited title and calls onUpdate function on button click', () => {
        const { getByText, getByDisplayValue } = render(
            <EditPopup imageSrc={mockImageSrc} title={mockTitle} onUpdate={mockUpdate} onCancel={mockCancel} />
        );

        const updatedTitle = 'Updated Title';

        const titleInput = getByDisplayValue(mockTitle);
        fireEvent.change(titleInput, { target: { value: updatedTitle } });

        const updateButton = getByText('Update');
        fireEvent.click(updateButton);

        expect(mockUpdate).toHaveBeenCalledWith(updatedTitle);
    });

    it('calls onCancel function when Cancel button is clicked', () => {
        const { getByText } = render(
            <EditPopup imageSrc={mockImageSrc} title={mockTitle} onUpdate={mockUpdate} onCancel={mockCancel} />
        );

        const cancelButton = getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(mockCancel).toHaveBeenCalledTimes(1);
    });
});
