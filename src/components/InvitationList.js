import React, {useState} from 'react';
import {Container, Button} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {deleteInvitation} from "../services/invitation.service";

function InvitationList({list, onChange}) {
    const [selectedList, setSelectedList] = useState([]);
    const columns = [
        {field: "id", headerName: "ID", width: 30},
        {field: "name", headerName: "Name", width: 200},
        {field: "guest_count", headerName: "Guest Count", width: 200},
        {field: "registration_key", headerName: "Registration Key", width: 400},
    ];
    const handleSelection = (s) => {
        setSelectedList(s);
    }

    const deleteSelection = () => {
        selectedList.forEach(i => {
            deleteInvitation(i).finally(() => {
                onChange()
            })
        });
    }

    return (
        <Container style={{height: "600px"}}>
            <div style={{display: "flex", justifyContent: "flex-end", padding: "1rem"}}>
                {selectedList.length > 0 ? <Button variant="contained" color="secondary" onClick={deleteSelection}>Delete</Button> : null}
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