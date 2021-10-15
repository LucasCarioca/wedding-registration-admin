import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {getAPIKey, setAPIKey} from "../config";

function Login() {
    const [key, setKey] = useState('');
    const [keyInput, setKeyInput] = useState('');
    useEffect(() => {
        setKey(getAPIKey());
    }, [])
    const submit = key => {
        console.log(key);
        setAPIKey(key);
        setKey(getAPIKey());
        window.location.reload(false);
    }

    const clearKey = () => {
        setAPIKey('');
        setKey(getAPIKey());
        window.location.reload(false);
    }
    if (key && key.length > 0) return (
        <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{margin: "1.5rem"}}
            onClick={clearKey}
        >
            Clear Key
        </Button>
    )
    else return (
        <form onSubmit={() => submit(keyInput)}>
            <TextField
                onChange={e => setKeyInput(e.target.value)}
                label="Api Key"
                variant="outlined"
                style={{margin: "1rem"}}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{margin: "1.5rem"}}
            >
                Save Key
            </Button>
        </form>
    );
}

export default Login;