import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_KEY = '1bf0113928841cce21312a503f274f3e';
const BASE_URL = 'https://api.themoviedb.org/3';

const TVShowsLists = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/discover/tv`, {
          params: {
            api_key: API_KEY,
           
          },
        });
        setTVShows(response.data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className='container'>
      <div className='text-center'>
          <h1 className='mb-4 my-5'>Trending TV Shows to Watch now</h1>
          <small className='epic'>Most watched TV Shows by days</small>
        </div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='d-flex justify-content-center  flex-wrap'>
            {tvShows.map((show) => (
              <div key={show.id} className='position-relative m-2'>
                <Link to={`/tv/${show.id}`}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                      className='card-img-top'
                      alt={show.name}
                      style={{ objectFit: 'cover', height: '300px', width: '200px' }}
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

export default TVShowsLists;
