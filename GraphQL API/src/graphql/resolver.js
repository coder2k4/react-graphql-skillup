import {addMovie, getMovieById, movies, removeMovie} from "./db";
import {getApiMovies} from "./api.db";

/**
 * Resolvers отвечают за описание логики, отваеты на запросы
 */


export const resolver = {
    Query: {
        movies: () => movies,
        movie: (_, args) => getMovieById(args.id), // получение аргументов
        apiMovie: (_, args) => getApiMovies(args.limit, args.rating) // получение аргументов
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        removeMovie: (_, {id}) => removeMovie(id)
    }
}