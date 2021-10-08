import axios from 'axios';
import {getAPIKey} from "../config";

export async function getAllInvitations() {
    const apiKey = getAPIKey()
    const res = await axios.get(`http://localhost:8081/api/v1/invitations?api_key=${apiKey}`);
    console.log(res);
    return res.data;
}

export async function createInvitation(name, guestCount) {
    const apiKey = getAPIKey()
    await axios.post(
        `http://localhost:8081/api/v1/invitations?api_key=${apiKey}`,
        {
            name,
            guest_count: guestCount
        }
    );
}