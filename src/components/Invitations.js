import React, {useEffect, useState} from 'react';
import {Container, LinearProgress} from '@mui/material';
import InvitationList from './InvitationList';
import NewInvitationForm from './NewInvitationForm';
import {getAllInvitations} from '../services/invitation.service';

function Invitations() {
  const [invitationList, setInvitationList] = useState([]);
  const [reload, setReload] = useState(Date());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const refresh = () => setReload(Date());
  useEffect(() => {
    getAllInvitations().then((data) => {
      setInvitationList(data);
    }).catch((error) => {
      console.error(error);
      setError(error.message);
    }).finally(() => setLoading(false));
  }, [reload]);
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
      <h1>Invitations</h1>
      <NewInvitationForm onSubmit={refresh}/>
      <InvitationList list={invitationList} onChange={refresh}/>
    </Container>
  );
}

export default Invitations;
