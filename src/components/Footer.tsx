import React, {useEffect, useState} from 'react'
import {getAppInfo} from '../../config'

export default function Footer() {
    const [year, setYear] = useState('')
    const [version, setVersion] = useState('')
    const [changelog, setChangelog] = useState('')
    useEffect(() => {
        setYear(`${new Date().getFullYear()}`)
        setVersion(`v${getAppInfo().version}`)
        setChangelog(`https://github.com/LucasCarioca/wedding-registration-guest/releases/tag/${version}`)
    }, [version])
    return (<>
        <p> Copyright & copy; Lucas De Souza {year} </p>
        <p><a href={changelog}> {version} </a></p>
    </>)
}