import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {createInvitation} from "../../services/invitation.service";
import {useState} from "react";

type props = {
    apiKey: string;
}

export default function InvitationForm({apiKey}: props) {
    const {reload} = useRouter()
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [error, setError] = useState('')
    const onSubmit = async (values: any) => {
        const response = await createInvitation(apiKey, values.name, values.email, values.phone, parseInt(values.guestCount))
        if (response.success) reload()
        setError(response.details)
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type={'text'}
                placeholder={'Name'}
                {...register('name', {required: true})}
            />
            <input
                type={'number'}
                placeholder={'Guest Count'}
                {...register('guestCount', {required: true})}
            />
            <input
                type={'text'}
                placeholder={'Email'}
                {...register('email')}
            />
            <input
                type={'text'}
                placeholder={'Phone Number'}
                {...register('phone', {required: true})}
            />
            <button type={'submit'}>Add Guest</button>
            <br/>
            {error !== '' && (<p style={{color: 'red'}}>{error}</p>)}
            {errors.name && <p style={{color: 'red'}}>The name field is required</p>}
            {errors.guestCount && <p style={{color: 'red'}}>The guest count field is required</p>}
            {errors.phone && <p style={{color: 'red'}}>The phone field is required</p>}
        </form>
    </>)
}