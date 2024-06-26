import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_KEY = '1bf0113928841cce21312a503f274f3e';
const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='container'>
       <div className='text-center'>
          <h1 className='mb-4 my-5'>Trending movies to Watch now</h1>
          <small className='epic'>Most watched movies by days</small>
        </div>
      <div className='row'>
       
        <div className='col-md-12'>
          <div className='d-flex flex-wrap'>
            {movies.map((movie) => (
              <div key={movie.id} className='position-relative m-2' style={{ width: '200px' }}>
                <Link to={`/movie/${movie.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className='card-img-top'
                      alt={movie.title}
                      style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                    />
                    <div className='position-absolute top-0 start-0 p-2 bg-primary text-white'>
                      <div className='d-flex align-items-center'>
                        <FaStar className='me-1 coza' />
                        <span>{movie.vote_average}</span>
                      </div>
                    </div>
                    <div className='card-body'>
                      <h5 className='card-title m-0 fs-5 c'>{movie.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
