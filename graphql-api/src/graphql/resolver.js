import {addMovie, getMovieById, movies, removeMovie} from "./db";
import {getApiMovie, getApiMovies} from "./api.db";

/**
 * Resolvers отвечают за описание логики, отваеты на запросы
 */


export const resolver = {
    Query: {
        movies: () => movies,
        movie: (_, args) => getMovieById(args.id), // получение аргументов
        apiMovies: (_, args) => getApiMovies(args.limit, args.rating), // полу
        apiMovie: (_,{id}) => getApiMovie(id)// чение аргументов
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        removeMovie: (_, {id}) => removeMovie(id)
    }
}