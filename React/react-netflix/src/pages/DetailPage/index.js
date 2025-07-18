import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({});
  // console.log(movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      // console.log('request : ', request);
      setMovie(request.data)
    }
    fetchData();
  }, [movieId]);

  if (!movie) return <div>...loading</div>

  return <section>
    <img
      className='modal__poster-img'
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt="poster"
    />
  </section>
}
