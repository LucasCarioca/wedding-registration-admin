import Head from 'next/head'
import {NextPageContext} from "next";
import {getApiKeyCookie} from "../src/utils/cookies";
import Login from "../src/components/index/Login";
import Link from "next/link";

export const getServerSideProps = (ctx: NextPageContext) => {
    const data = {props: {apiKey: getApiKeyCookie(ctx)}}

    return data
}

type props = {
    apiKey: string;
}

export default function IndexPage({apiKey}: props) {
    return (<>
        <Head>
            <title>L&K - Wedding Admin</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        {apiKey ? (<>
            <h1>Home</h1>
            <p>Home</p>
            <ul>
                <li><Link href={`/invitations?api_key=${apiKey}`}>Invitations</Link></li>
                <li><Link href={`/guests?api_key=${apiKey}`}>Guests</Link></li>
            </ul>
        </>) : (<>
            <Login/>
        </>)}
    </>)
}
