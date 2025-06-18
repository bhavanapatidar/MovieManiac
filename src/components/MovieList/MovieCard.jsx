import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return 
<a href="" className='movie_card'> <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411" 
alt="" className='movie_poster' />
    <div className='movie_details'>
        <h3 className='movie_details_heading'>{movie.original_title}</h3>
        <p className='movie_date_rate'>{movie.release_date}</p>
        <p className='movie_year'></p>
        <p className='align_center'>
            8.0
            <img src={Star} alt="rating icon"
            className='card_emoji' />
        </p>
    </div>

</a>

}

export default MovieCard