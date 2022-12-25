import {Invitation} from "../../src/models/invitation";
import {Guest} from "../../src/models/guest";
import {getAllGuestsByInvitation, getInvitation} from "../../src/services/invitation.service";
import {getApiKeyCookie} from "../../src/utils/cookies";
import Link from "next/link";
import InvitationAction from "../../src/components/invitations/InvitationAction";


export async function getServerSideProps(ctx: any) {
    const apiKey = getApiKeyCookie(ctx)
    const {registration_key} = ctx.query
    const invitation = await getInvitation(registration_key)
    const guests = await getAllGuestsByInvitation(registration_key)
    return {props: {invitation, guests, apiKey}}
}

type props = {
    invitation: Invitation
    guests: Guest[]
    apiKey: string
}

export default function InvitationPage({invitation, guests, apiKey}: props) {
    return (<>
        <h1>{invitation.name}</h1>
        <p><Link href={`/?api_key=${apiKey}`}>Home</Link> / <Link
            href={`/invitations?api_key=${apiKey}`}>Invitations</Link> / {invitation.registration_key}</p>
        <p>Invited Guests: {invitation.guest_count}</p>
        <InvitationAction apiKey={apiKey} id={invitation.id}/>
        <p>Registered Guests: {guests.length}</p>
        <ul>
            {guests.map((guest, i) => (
                <li key={i}>{guest.first_name} {guest.last_name}</li>
            ))}
        </ul>
    </>)
}