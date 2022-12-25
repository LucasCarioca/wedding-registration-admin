import {NextPageContext} from "next";
import {getCookie, setCookie} from "cookies-next";

export const COOKIES = {
    API_KEY: 'api_key'
}

export function getApiKeyCookie({req, res, query}: NextPageContext): string | string[] | null {
    const cookie = getCookie(COOKIES.API_KEY, {req, res})
    let apiKey = query.api_key ?? null
    if (apiKey || (cookie && cookie.valueOf() !== apiKey)) {
        setCookie(COOKIES.API_KEY, apiKey, {req, res})
    }
    if (cookie && !apiKey) {
        apiKey = cookie.valueOf() as string
        setCookie(COOKIES.API_KEY, apiKey, {req, res})
    }
    return apiKey
}