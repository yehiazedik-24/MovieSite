import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '1bf0113928841cce21312a503f274f3e';
const BASE_URL = 'https://api.themoviedb.org/3';

const TVShowDetails = () => {
  const { id } = useParams(); // استخراج الـ id من الـ URL
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tv/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setTVShow(response.data);
      } catch (error) {
        console.error('Error fetching TV show details:', error);
      }
    };

    fetchTVShowDetails();
  }, [id]);

  if (!tvShow) {
    return <div>Loading...</div>;
  }

  const genres = tvShow.genres.map((genre) => genre.name).join(', ');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
            alt={tvShow.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-7">
          <div className="">
            <div className="description">
              <h1 className="fs-1 fw-bolder">{tvShow.name}</h1>
              <h3 className="fs-5 my-4">Description</h3>
              <p className="lead">{tvShow.overview}</p>
            </div>
            <div className="details">
              <div className="detail-item">
                <h3 className="fs-5 my-4">First Air Date</h3>
                <p className="lead">{tvShow.first_air_date}</p>
              </div>
              <div className="detail-item">
                <h3 className="fs-5 my-4">Rating</h3>
                <p className="lead">{tvShow.vote_average}</p>
              </div>
              <div className="detail-item">
                <h3 className="fs-5 my-4">Genres</h3>
                <div className="genres-box">
                  {tvShow.genres.map((genre) => (
                    <span key={genre.id} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShowDetails;
