import React from 'react';
import {Paper} from '@mui/material';
import {getGuestRegistrationHost} from '../config';
import QRCode from 'react-qr-code';

function InvitationCard({name, registrationKey, guestCount}) {
  const url = `${getGuestRegistrationHost()}/registrations/${registrationKey}`;
  return (
    <Paper style={{padding: '2rem', margin: '1rem', textAlign: 'center'}}>
      <h3>{name}</h3>
      <br/>
      <QRCode value={url} />
      <br/>
      <p>{registrationKey}</p>
      <p>guests: {guestCount}</p>
      <a href={url}>Register guests</a>
    </Paper>
  );
}

export default InvitationCard;
