import {useState} from "react";
import {updateInvitation} from "../../services/invitation.service";
import {useRouter} from "next/router";

type props = {
    apiKey: string;
    id: string;
}

export default function InvitationAction({apiKey, id}: props) {
    const {reload} = useRouter()
    const [error, setError] = useState('')
    const action = async (instruction: 'guest_count_increase' | 'guest_count_decrease' | 'declined') => {
        const response = await updateInvitation(apiKey, id, instruction)
        if (response.success) reload()
        setError(response.details)
    }

    return (<>
        <button onClick={() => action('guest_count_decrease')}>Decrease Guest Count</button>
        /
        <button onClick={() => action('guest_count_increase')}>Increase Guest Count</button>
    </>)
}