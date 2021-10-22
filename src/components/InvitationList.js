import React, {useState} from 'react';
import {Container, Button} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {deleteInvitation} from '../services/invitation.service';

function InvitationList({list, onChange}) {
  const [selectedList, setSelectedList] = useState([]);
  const columns = [
    {field: 'id', headerName: 'ID', width: 30},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'guest_count', headerName: 'Guest Count', width: 200},
    {field: 'registration_key', headerName: 'Registration Key', width: 400},
  ];
  const handleSelection = (s) => {
    setSelectedList(s);
  };

  const deleteSelection = () => {
    selectedList.forEach(i => {
      deleteInvitation(i).then(() => {
        onChange();
      });
    });
  };

  return (
    <Container style={{height: '600px'}}>
      <div style={{display: 'flex', justifyContent: 'flex-end', padding: '1rem'}}>
        {selectedList.length > 0 ?
          <Button
            data-testid="deleteButton"
            variant="contained"
            color="secondary"
            onClick={deleteSelection}
          >
            Delete
          </Button> :
          <Button
            data-testid="deleteButton-disabled"
            variant="contained"
            disabled={true}
          >
            Delete
          </Button>
        }
      </div>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={handleSelection}
      />
    </Container>
  );
}

export default InvitationList;
