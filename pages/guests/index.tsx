import {NextPageContext} from "next";
import {getApiKeyCookie} from "../../src/utils/cookies";
import {getAllGuests} from "../../src/services/invitation.service";
import {Guest} from "../../src/models/guest";
import Link from "next/link";

export const getServerSideProps = async (ctx: NextPageContext) => {
    const apiKey = getApiKeyCookie(ctx)
    let guests = []
    if (apiKey && !Array.isArray(apiKey)) guests = await getAllGuests(apiKey)
    const data = {props: {apiKey, guests}}
    return data
}

type props = {
    apiKey: string;
    guests: Guest[];
}

export default function GuestsPage({apiKey, guests}: props) {
    return (<>
        <h1>Guests</h1>
        <p><Link href={`/?api_key=${apiKey}`}>Home</Link> / Guests </p>
        <p>Registered Guests: {guests.length}</p>
        <ul>
            {guests.map((guest, i) => (
                <li key={i}>
                    <Link href={`/invitations/${guest.invitation.id}?api_key=${apiKey}`}>
                        {guest.invitation.name}
                    </Link>: {guest.first_name} {guest.last_name}
                </li>
            ))}
        </ul>
    </>)
}