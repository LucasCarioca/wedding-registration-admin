import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import InvitationList from "./InvitationList";
import NewInvitationForm from "./NewInvitationForm";
import {getAllInvitations} from "../services/invitation.service";

function Invitations() {
    const [invitationList, setInvitationList] = useState([]);
    const [reload, setReload] = useState(Date())
    const refresh = () => setReload(Date())
    useEffect(() => {
        getAllInvitations().then(data => {
            setInvitationList(data);
        }).catch(error => {
            console.error(error)
        })
    }, [reload]);
    return (
        <Container style={{height: "600px"}}>
            <Typography variant="h1">Invitations</Typography>
            <NewInvitationForm onSubmit={refresh}/>
            <InvitationList list={invitationList}/>
        </Container>
    )
}

export default Invitations;