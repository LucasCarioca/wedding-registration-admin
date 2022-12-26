import {getHost} from "../../config";

const host = process.env.NEXT_PUBLIC_REGISTRATION_API_HOST

export async function searchInvitation(value: string) {
    const res = await fetch(`${host}/api/v1/invitations?value=${value}`)
    return await res.json()
}

export async function getInvitation(key: string, id: string) {
    const res = await fetch(`${host}/api/v1/invitations/${id}?api_key=${key}`)
    return await res.json()
}

export async function deleteInvitation(key: string, id: string) {
    const res = await fetch(`${host}/api/v1/invitations/${id}?api_key=${key}`, {method: 'DELETE'})
    return await res.json()
}

export async function getAllInvitations(key: string) {
    const res = await fetch(`${host}/api/v1/invitations?api_key=${key}`)
    return await res.json()
}

export async function createInvitation(key: string, name: string, email: string, phone: string, guest_count: number) {
    const host = getHost();
    const res = await fetch(
        `${host}/api/v1/invitations?api_key=${key}`,
        {
            method: 'POST',
            body: JSON.stringify({
                name,
                message: 'no-msg',
                email: email.length > 0 ? email : `${name}@noemail.com`,
                phone,
                guest_count
            })
        }
    );
    if (res.status === 200) return {success: true}
    return {...await res.json(), success: false}
}

export async function updateInvitation(key: string, id: string, instruction: 'guest_count_increase' | 'guest_count_decrease' | 'declined') {
    const host = getHost();
    const res = await fetch(
        `${host}/api/v1/invitations/${id}?api_key=${key}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                instruction
            })
        }
    );
    if (res.status === 200) return {success: true}
    return {...await res.json(), success: false}
}

export async function getAllGuestsByInvitation(key: string) {
    const res = await fetch(`${host}/api/v1/guests?registration_key=${key}`)
    return await res.json()
}

export async function getAllGuests(key: string) {
    const res = await fetch(`${host}/api/v1/guests?api_key=${key}`)
    return await res.json()
}

export async function createGuest(
    key: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    emailOptIn: string,
    smsOptIn: string) {

    const res = await fetch(
        `${host}/api/v1/guests?registration_key=${key}`,
        {
            method: 'POST',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                email_opt_in: emailOptIn,
                sms_opt_in: smsOptIn
            })
        }
    );
    return await res.json()
}

export async function deleteGuest(key: string, id: string) {
    const res = await fetch(`${host}/api/v1/guests/${id}?registration_key=${key}`, {method: 'DELETE'});
    return await res.json()
}


const errorMessages = {
    'GUEST_COUNT_LIMIT': 'You have reached the maximum number of guests for this invitation.',
    'UNKNOWN': 'Something went wrong. Please try again later or contact us for .',
} as { [key: string]: string }

export function readErrorMessage(error: any) {
    const code = error?.response?.data?.error ?? 'UNKNOWN';
    const message = errorMessages[code];
    return message;
}