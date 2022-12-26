import {Invitation} from "../../src/models/invitation";
import {Guest} from "../../src/models/guest";
import {getAllGuestsByInvitation, getInvitation} from "../../src/services/invitation.service";
import {getApiKeyCookie} from "../../src/utils/cookies";
import Link from "next/link";
import InvitationAction from "../../src/components/invitations/InvitationAction";


export async function getServerSideProps(ctx: any) {
    const apiKey = getApiKeyCookie(ctx)
    const {id} = ctx.query
    let invitation: Invitation | undefined = undefined
    let guests: Guest[] = []

    if (apiKey && !Array.isArray(apiKey)) {
        invitation = await getInvitation(apiKey, id)
        if (invitation) guests = await getAllGuestsByInvitation(invitation.registration_key)
    }
    return {props: {invitation, guests, apiKey}}
}

type props = {
    invitation?: Invitation
    guests: Guest[]
    apiKey: string
}

export default function InvitationPage({invitation, guests, apiKey}: props) {
    return (<>
        {invitation ? (<>
            <h1>{invitation.name}</h1>
            <p><Link href={`/?api_key=${apiKey}`}>Home</Link> / <Link
                href={`/invitations?api_key=${apiKey}`}>Invitations</Link> / {invitation.id}</p>
            <p>Invited Guests: {invitation.guest_count}</p>
            <InvitationAction apiKey={apiKey} id={invitation.id}/>
            <p>Registered Guests: {guests.length}</p>
            {/*<ul>*/}
            {/*    {guests.map((guest, i) => (*/}
            {/*        <li key={i}>{guest.first_name} {guest.last_name}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </>) : (<>
            <h1>Invitation not found</h1>
            <p><Link href={`/?api_key=${apiKey}`}>Home</Link> / <Link
                href={`/invitations?api_key=${apiKey}`}>Invitations</Link> / NA</p>
        </>)}
    </>)
}