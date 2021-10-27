import React, {useEffect, useState} from 'react';
import {Container, LinearProgress} from '@mui/material';
import {getAllInvitations} from '../services/invitation.service';
import InvitationCard from './InvitationCard';

function InvitationCardList() {
  const [invitationList, setInvitationList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllInvitations().then((data) => {
      setInvitationList(data);
    }).catch((error) => {
      console.error(error);
      setError(error.message);
    }).finally(() => setLoading(false));
  }, []);
  if (error !== '') {
    return (
      <Container style={{height: '600px'}}>
        <h1>Error</h1>
        <p>{error}</p>
      </Container>
    );
  }
  if (loading) {
    return (
      <Container style={{height: '600px'}}>
        <h1>Loading</h1>
        <LinearProgress/>
      </Container>
    );
  }
  return (
    <Container style={{height: '600px'}}>
      <h1>Invitation Cards</h1>
      {invitationList.map((invitation, i) => (
        <InvitationCard
          key={i}
          name={invitation.name}
          registrationKey={invitation.registration_key}
          guestCount={invitation.guest_count}
        />
      ))}
    </Container>
  );
}

export default InvitationCardList;
