import {useForm} from "react-hook-form";
import {useRouter} from "next/router";

export default function Login() {
    const {push} = useRouter()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (values: any) => {
        return push(`/?api_key=${values.key}`)
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'text'} {...register('key', {required: true})}/>
            <button type={'submit'}>Login</button>
            <br/>
            {errors.searchText && <p style={{color: 'red'}}>The key field is required</p>}
        </form>
    </>)
}