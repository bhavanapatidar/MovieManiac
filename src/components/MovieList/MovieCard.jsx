import React from 'react'
import './MovieCard.css'
import Star from '../../assets/star.png'

const MovieCard = ({movie}) => {
  return (
<a href="" className='movie_card'> <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
alt="" className='movie_poster' />
    <div className='movie_details'>
        <h3 className='movie_details_heading'>{movie.original_title}</h3>
        <div className='align_center movie_date_rate'>{movie.release_date}
        <p className='align_center'>
            {movie.rate_average}
            <img src={Star} alt="rating icon"
            className='card_emoji' />
        </p>
    </div>
    <p className='movie_description'>
    {movie.overview.length > 100 ?
        `${movie.overview.substring(0, 100)}...` : movie.overview}

    </p>
    </div>

</a>

)}

export default MovieCard