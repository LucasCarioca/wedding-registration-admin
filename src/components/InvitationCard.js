import React from 'react';
import {Paper} from '@mui/material';
import {getGuestRegistrationHost} from '../config';
import QRCode from 'react-qr-code';

function InvitationCard({name, registrationKey, guestCount}) {
  const url = `${getGuestRegistrationHost()}/invitations/${registrationKey}`;
  return (
    <>
      <Paper style={{padding: '2rem', margin: '1rem', textAlign: 'center'}}>
        <h3>{name}</h3>
        <br/>
        <QRCode value={url} />
        <br/>
        <p>{registrationKey}</p>
        <p>guests: {guestCount}</p>
      </Paper>
      <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '1rem', margin: '0'}}>
        <a href={url}>registration page &raquo;</a>
      </div>
    </>
  );
}

export default InvitationCard;
