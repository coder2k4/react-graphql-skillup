export let movies = [
    {
        id: 1,
        name: "Крик 1",
        score: 5
    },
    {
        id: 2,
        name: "Очень страшное кино 2",
        score: 3
    },
    {
        id: 3,
        name: "Мафия 3",
        score: 4
    },
]

export const getMovieById = id => {
    return movies.filter(movie => movie.id === id)[0]
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies.push({id: Math.random(), name, score})
    return newMovie
}

export const removeMovie = id => {
    const filteredMovies = movies.filter(movie => movie.id !== id)
    if( filteredMovies.length < movies.length)
    {
        movies = filteredMovies
        return true
    }
    return false
}