import React, { useState, useEffect } from 'react'
import requests from '../api/requests';
import axios from '../api/axios';
import './Row.css';
import MovieModal from './MovieModal';

export default function Row({title, id, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();

    }, []);

    const fetchMovieData = async () => {
        const requests = await axios.get(fetchUrl);
        // console.log(`request`, requests);
        setMovies(requests.data.results);
    };

    const handleClick = (movie) => {
      setModalOpen(true);
      setMovieSelected(movie);
    };

  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span 
            className='arrow'
            onClick={() => {
                document.getElementById(id).scrollLeft -= window.innerWidth - 20;
            }}>
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
            {movies.map(movie => (
                <img
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path: movie.backdrop_path} `}
                    alt={movie.name}
                    onClick={() => handleClick(movie)}
                />
            ))}
        </div>
        <div className='slider__arrow-right'>
            <span 
            className='arrow'
            onClick={() => {
                document.getElementById(id).scrollLeft += window.innerWidth - 20;
                console.log(`asd`)
            }}>
                {">"}
            </span>
        </div>
      </div>

            {modalOpen && 
              <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            }

    </section>
  )
}
