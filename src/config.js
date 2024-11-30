export const CONFIG = {
    apiKey: import.meta.env.VITE_API_KEY,
    baseURL: import.meta.env.VITE_API_URL,
    imgBaseURL: import.meta.env.VITE_IMAGE_URL,
}

export function posterImage(path, size = 'w300') {
    return `${CONFIG.imgBaseURL}/${size}/${path}`;
}