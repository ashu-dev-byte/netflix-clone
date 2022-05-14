import axios from "axios"
import { TMDB_BASE_URL, TMDB_API_KEY, AUTH_TOKEN } from "constants/constants"

const axiosInstance = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
    },
})

axiosInstance.interceptors.request.use(function (config) {
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: AUTH_TOKEN,
        },
    }
})

export const getAPIService = (url: string, params?: { with_genres?: number; with_networks?: number }) => {
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
