import {NextPageContext} from "next";
import {getApiKeyCookie} from "../../src/utils/cookies";
import {getAllInvitations} from "../../src/services/invitation.service";
import {Invitation} from "../../src/models/invitation";
import Link from "next/link";
import InvitationForm from "../../src/components/invitations/InvitationForm";

export const getServerSideProps = async (ctx: NextPageContext) => {
    const apiKey = getApiKeyCookie(ctx)
    let invitations = []
    if (apiKey && !Array.isArray(apiKey)) invitations = await getAllInvitations(apiKey)
    const data = {props: {apiKey, invitations}}
    return data
}

type props = {
    apiKey: string;
    invitations: Invitation[];
}

export default function InvitationsPage({apiKey, invitations}: props) {
    let invitedTotal = 0
    invitations.forEach(i => invitedTotal += i.guest_count)
    return (<>
        <h1>Invitations</h1>
        <p><Link href={`/?api_key=${apiKey}`}>Home</Link> / Invitations </p>
        <p>Total Invitations: {invitations.length}</p>
        <p>Total Guests Invited: {invitedTotal}</p>
        <InvitationForm apiKey={apiKey}/>
        <br/>
        <ul>
            {invitations.map((invitation, i) => (
                <li key={i}><Link
                    href={`/invitations/${invitation.registration_key}?api_key=${apiKey}`}>{invitation.name}({invitation.guest_count})</Link>: {invitation.phone} / {invitation.email}
                </li>
            ))}
        </ul>
    </>)
}