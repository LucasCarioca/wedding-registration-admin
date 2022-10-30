import React, {useEffect, useState} from 'react';
import {Container, LinearProgress, Typography} from '@mui/material';
import {getAllGuests} from '../services/invitation.service';
import GuestList from './guestList';

function Invitations() {
  const [guestList, setGuestList] = useState([]);
  const [reload, setReload] = useState(Date());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const refresh = () => setReload(Date());
  useEffect(() => {
    getAllGuests().then((data) => {
      setGuestList(data);
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
      <h1>Guests</h1>
      <br/>
      <Typography><strong>TOTAL: </strong>{guestList.length}</Typography>
      <br/>
      <GuestList list={guestList} onChange={refresh}/>
    </Container>
  );
}

export default Invitations;
