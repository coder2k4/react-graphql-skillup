import fetch from 'node-fetch'

const api_url = "https://yts.mx/api/v2/list_movies.json?"

export const getApiMovies = (limit, rating) => {
    let REQUEST_URL = api_url
    if(limit>0)
        REQUEST_URL += `limit=${limit}`
    if(rating>0)
        REQUEST_URL += `&minimum_rating=${rating}`

    return fetch(REQUEST_URL).then(response => response.json()).then(json => json.data.movies)
}