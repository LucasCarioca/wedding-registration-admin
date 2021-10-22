import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import InvitationList from './invitationList';
import {deleteInvitation} from '../services/invitation.service';
jest.mock('../services/invitation.service', () => ({
  deleteInvitation: jest.fn()
}));

describe('invitationList', function() {
  it('should load component', function() {
    const invitations = [];
    const mockOnChange = jest.fn();
    expect(render(<InvitationList list={invitations} onChange={mockOnChange}/>)).toBeTruthy();
  });
  it('should show invitations in the component', function() {
    const invitations = [{
      id: 12345,
      name: 'registrationName',
      guest_count: 1,
      registration_key: 'registrationKey'
    }];
    const mockOnChange = jest.fn();
    render(<InvitationList list={invitations} onChange={mockOnChange}/>);
    expect(screen.getByText(invitations[0].name)).toBeInTheDocument();
  });
  it('should show invitations in the component', async function() {
    deleteInvitation.mockResolvedValue();
    const invitations = [{
      id: 12345,
      name: 'registrationName',
      guest_count: 1,
      registration_key: 'registrationKey'
    }];
    const mockOnChange = jest.fn();
    render(<InvitationList list={invitations} onChange={mockOnChange}/>);
    expect(screen.getByTestId('deleteButton-disabled')).toBeInTheDocument();
    screen.getByText(invitations[0].name).click();
    const deleteButton = await screen.findByTestId('deleteButton');
    expect(deleteButton).toBeInTheDocument();
    deleteButton.click();
    expect(deleteInvitation).toHaveBeenCalledWith(invitations[0].id);
    await waitFor(function() {
      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
