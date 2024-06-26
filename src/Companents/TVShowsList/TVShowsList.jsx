import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_KEY = '1bf0113928841cce21312a503f274f3e';
const BASE_URL = 'https://api.themoviedb.org/3';

const TVShowsList = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/discover/tv`, {
          params: {
            api_key: API_KEY,
            sort_by: 'popularity.desc',
            'first_air_date.gte': '2019-01-01',
            'first_air_date.lte': '2019-12-31',
          },
        });

        setTVShows(response.data.results.slice(0, 4));
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <h1 className='mb-4'>Trending TV Shows (2019)</h1>
          <small className='epic'>Most watched TV shows released in 2019</small>
        </div>
        <div className='col-md-8'>
          <div className='d-flex '>
            {tvShows.map((show) => (
              <div key={show.id} className='position-relative m-2' style={{ width: '200px' }}>
                <Link to={`/tv/${show.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    className='card-img-top'
                    alt={show.name}
                    style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                  />
                  <div className='position-absolute top-0 start-0 p-2 bg-primary text-white'>
                    <div className='d-flex align-items-center'>
                      <FaStar className='me-1 coza' />
                      <span>{show.vote_average}</span>
                    </div>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title m-0 fs-5'>{show.name}</h5>
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

export default TVShowsList;
