import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '1bf0113928841cce21312a503f274f3e';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { id } = useParams(); // استخراج الـ id من الـ URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const genres = movie.genres.map((genre) => genre.name).join(', ');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-7">
          <div className="">
            <div className="description">
              <h1 className="fs-1 fw-bolder">{movie.title}</h1>
              <h3 className="fs-5 my-4">Description</h3>
              <p className="lead">{movie.overview}</p>
            </div>
            <div className="detail-item">
                <h3 className="fs-5 my-4">Genres</h3>
                <div className="genres-box">
                  {movie.genres.map((genre) => (
                    <span key={genre.id} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            <div className="details">
              <div className="detail-item">
                <h3 className="fs-5 my-4">Release Date</h3>
                <p className="lead">{movie.release_date}</p>
              </div>
              <div className="detail-item">
                <h3 className="fs-5 my-4">Rating</h3>
                <p className="lead">{movie.vote_average}</p>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
