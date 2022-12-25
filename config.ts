import pkg from './package.json'

export function getAppInfo() {
    return {
        version: pkg.version ?? '0.0.0',
        name: pkg.name ?? 'App',
    }
}

export function getHost() {
    console.log(process.env.NEXT_PUBLIC_REGISTRAION_API_HOST)
    return process.env.NEXT_PUBLIC_REGISTRAION_API_HOST ?? 'http://localhost:8081';
}