import React from 'react';
import {Container} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

function InvitationList({list}) {
    const columns = [
        {field: "id", headerName: "ID", width: 30},
        {field: "name", headerName: "Name", width: 200},
        {field: "guest_count", headerName: "Guest Count", width: 200},
        {field: "registration_key", headerName: "Registration Key", width: 250},
    ];
    return (
        <Container style={{height: "600px"}}>
            <DataGrid
                rows={list}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Container>
    )
}

export default InvitationList;