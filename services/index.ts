import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
    params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        language: 'en-US',
    },
})

axiosInstance.interceptors.request.use(function (config) {
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
        },
    }
})

export const getAPIService = (
    url: string,
    params?: { with_genres?: number; with_networks?: number }
) => {
    return axiosInstance
        .get(url, {
            params: params,
        })
        .then((res) => {
            return res
        })
        .catch((e) => {
            throw e.response
        })
}
