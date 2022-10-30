import React from 'react';
import {Container} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

function GuestList({list}) {
  const columns = [
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'invitation', headerName: 'Guests', width: 100},
  ];
  return (
    <Container style={{height: '600px'}}>
      <DataGrid
        rows={list.map(
          guest => ({
            id: guest.id,
            name: `${guest.first_name} ${guest.last_name}`,
            invitation: guest.invitation.name
          })
        )}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
}

export default GuestList;
