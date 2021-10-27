export function getAPIKey() {
  return localStorage.getItem('api_key');
}

export function getGuestRegistrationHost() {
  return process.env.REACT_APP_REGISTRAION_GUEST_SITE_HOST ?? 'http://localhost:3001';
}

export function getHost() {
  return process.env.REACT_APP_REGISTRAION_API_HOST ?? 'http://localhost:8081';
}

export function setAPIKey(apiKey) {
  localStorage.setItem('api_key', apiKey);
}
