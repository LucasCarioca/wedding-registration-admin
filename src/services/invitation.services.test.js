jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn()
}));
import axios from 'axios';
import {createInvitation, deleteInvitation, getAllInvitations} from './invitation.service';

describe('invitation.service', function() {
  it('should get all invitations', async function() {
    const expectedData = [{fake: 'data'}];
    axios.get.mockResolvedValueOnce({data: expectedData});
    const data = await getAllInvitations();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8081/api/v1/invitations?api_key=null');
    expect(data).toEqual(expectedData);
  });
  it('should create an invitation', function() {
    const expectedName = 'testName';
    const message = 'testmessage';
    const expectedGuestCount = 3;
    const email = 'test@test.com';
    const phone = '1234567890';
    axios.post.mockResolvedValueOnce();
    createInvitation(expectedName, message, email, phone, expectedGuestCount);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/api/v1/invitations?api_key=null', {
      name: expectedName,
      guest_count: expectedGuestCount,
      message,
      email,
      phone,
    });
  });
  it('should create an invitation', function() {
    const expectedId = 1;
    axios.delete.mockResolvedValueOnce();
    deleteInvitation(expectedId);
    expect(axios.delete).toHaveBeenCalledWith(`http://localhost:8081/api/v1/invitations/${expectedId}?api_key=null`);
  });
});
