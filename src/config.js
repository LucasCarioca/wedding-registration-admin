export function getAPIKey() {
    return localStorage.getItem("api_key");
}

export function getHost() {
    return process.env.REACT_APP_REGISTRAION_API_HOST ?? "http://localhost:8081";
}

export function setAPIKey(apiKey) {
    localStorage.setItem("api_key", apiKey);
}