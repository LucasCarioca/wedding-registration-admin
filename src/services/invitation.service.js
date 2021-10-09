import axios from 'axios';
import {getAPIKey, getHost} from "../config";

export async function getAllInvitations() {
    const apiKey = getAPIKey()
    const host = getHost()
    const res = await axios.get(`${host}/api/v1/invitations?api_key=${apiKey}`);
    console.log(res);
    return res.data;
}

export async function createInvitation(name, guestCount) {
    const apiKey = getAPIKey()
    const host = getHost()
    await axios.post(
        `${host}/api/v1/invitations?api_key=${apiKey}`,
        {
            name,
            guest_count: guestCount
        }
    );
}