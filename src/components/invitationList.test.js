import React from 'react';
import {render, screen} from '@testing-library/react';
import InvitationList from './invitationList';

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
});
