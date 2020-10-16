import React from 'react';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
    {
        apiMovies(rating: 1){
            id
            medium_cover_image
            title
        }
    }
`

const Home = () => {

    const {loading, error , data} = useQuery(GET_MOVIES)
    console.log(loading, error , data)
    return (
        <>
            <div
                className="hero is-medium"
                style={{
                    backgroundImage: "linear-gradient(-95deg , #FE7236, #D754AD)"
                }}
            >
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1
                            className="title has-text-white"
                            style={{ marginBottom: 40, fontSize: 60 }}
                        >
                            Apollo Movies
                        </h1>
                        <h2 className="subtitle has-text-white is-size-3">
                            I love Apollo and GraphQL
                        </h2>
                    </div>
                </div>
            </div>
            <div className="level">
                <div className="container">
                    {loading ? (
                        <div
                            className="column is-half is-offset-one-quarter has-text-centered"
                            style={{ marginTop: 20 }}
                        >
                            <span className="has-text-grey is-size-5">Loading</span>
                        </div>
                    ) : data.apiMovies ? (
                        <div
                            className="columns is-multiline is-6"
                            style={{ position: "relative", top: -50 }}
                        >
                            {data.apiMovies.map(movie =>
                                movie.medium_cover_image ? (
                                    <Movie key={movie.id} {...movie} />
                                ) : null
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default Home;