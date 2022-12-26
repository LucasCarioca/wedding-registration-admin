import {useState} from "react";
import {deleteInvitation, updateInvitation} from "../../services/invitation.service";
import {useRouter} from "next/router";

type props = {
    apiKey: string;
    id: string;
}

export default function InvitationAction({apiKey, id}: props) {
    const {push, reload} = useRouter()
    const [error, setError] = useState('')
    const handleAction = async (instruction: 'guest_count_increase' | 'guest_count_decrease' | 'declined') => {
        const response = await updateInvitation(apiKey, id, instruction)
        if (response.success) reload()
        setError(response.details)
    }

    const handleDelete = () => {
        const userConfirmed = confirm('Are you sure you want to delete the invitation?')
        if (userConfirmed) {
            deleteInvitation(apiKey, id)
                .then(() => push(`/invitations?api_key=${apiKey}`))
                .catch(error => setError(error.message))
        }
    }

    return (<>
        <button onClick={() => handleAction('guest_count_decrease')}>Decrease Guest Count</button>
        /
        <button onClick={() => handleAction('guest_count_increase')}>Increase Guest Count</button>
        <br/>
        <br/>
        <button onClick={handleDelete}>DELETE</button>
        <br/>
        {error !== '' && (<p style={{color: 'red'}}>{error}</p>)}
    </>)
}