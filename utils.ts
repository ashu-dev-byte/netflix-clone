export const getRandomElement = (array: Array<any>) => {
    return array[Math.floor(Math.random() * array.length)]
}

export const getRandomTitleFromAllGenres = (genres: Object) => {
    return getRandomElement(getRandomElement(Object.values(genres)))
}
