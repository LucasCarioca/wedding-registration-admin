import axios from 'axios';

export async function getAllInvitations() {
    const apiKey = "letmein";
    const res = await axios.get(`http://localhost:8081/api/v1/invitations?api_key=${apiKey}`);
    console.log(res);
    return res.data;
}

export async function createInvitation(name, guestCount) {
    const apiKey = "letmein";
    await axios.post(
        `http://localhost:8081/api/v1/invitations?api_key=${apiKey}`,
        {
            name,
            guest_count: guestCount
        }
    );
}