import React, { useState, useEffect } from 'react';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '1bf0113928841cce21312a503f274f3e';
const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            sort_by: 'popularity.desc',
            'primary_release_date.gte': '2018-01-01',
            'primary_release_date.lte': '2019-12-31',
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
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex '>
            {movies.slice(0, 8).map((movie) => (
              <div key={movie.id} className='position-relative m-2'>
                <Link to={`/movie/${movie.id}`}>
                  <div className=''>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className='card-img-top'
                      alt={movie.title}
                      style={{ objectFit: 'cover', height: '300px', width: '200px' }}
                    />
                    <div className='position-absolute top-0 start-0 p-2 bg-primary text-white'>
                      <div className='d-flex align-items-center'>
                        <FaStar className='me-1 coza' />
                        <span>{movie.vote_average}</span>
                      </div>
                    </div>
                    <div className='card-body'>
                      <h5 className='card-title m-0 fs-5'>{movie.title}</h5>
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
