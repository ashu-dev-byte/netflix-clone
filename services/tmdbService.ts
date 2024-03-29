import { getAPIService } from "services/index"

export const getActionTitles = async () => {
    const res = await getAPIService("/discover/movie", { with_genres: 28 })
    return res.data.results
}

export const getComedyTitles = async () => {
    const res = await getAPIService("/discover/movie", { with_genres: 35 })
    return res.data.results
}

export const getDocumentaries = async () => {
    const res = await getAPIService("/discover/movie", { with_genres: 99 })
    return res.data.results
}

export const getHorrorTitles = async () => {
    const res = await getAPIService("/discover/movie", { with_genres: 27 })
    return res.data.results
}

export const getNetflixOriginals = async () => {
    const res = await getAPIService("/discover/movie", { with_networks: 213 })
    return res.data.results
}

export const getRomanceTitles = async () => {
    const res = await getAPIService("/discover/movie", { with_genres: 10749 })
    return res.data.results
}

export const getTendingNow = async () => {
    const res = await getAPIService("/trending/all/week")
    return res.data.results
}

export const getTopRated = async () => {
    const res = await getAPIService("/movie/top_rated")
    return res.data.results
}
