import Invitations from './invitations';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {getAllInvitations} from '../services/invitation.service';
jest.mock('../services/invitation.service', () => ({
  getAllInvitations: jest.fn()
}));

describe('invitations component', function() {
  it('should render the component', async function() {
    getAllInvitations.mockResolvedValue([]);
    render(<Invitations/>);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(await screen.findByText(/Invitations/)).toBeInTheDocument();
  });
});
