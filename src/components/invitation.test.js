import Invitations from './invitations';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {getAllInvitations} from '../services/invitation.service';
jest.mock('../services/invitation.service', () => ({
  getAllInvitations: jest.fn()
}));

describe('invitations component', function() {
  it('should render the component', function() {
    getAllInvitations.mockResolvedValue([]);
    render(<Invitations/>);
    screen.getByText(/Loading/);
    screen.findByText(/Invitations/);
  });
});