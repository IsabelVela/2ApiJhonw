import React from 'react'
import './MovieCard.css'

export const MovieCard = (props) => {
  const actor = props.actor
  return (
    <div className='movie-container'>
        {/* <img src={`https://image.tmdb.org/t/p/w500/${ actor.name }`}  /> */}
        <img src="https://blog.latam.playstation.com/tachyon/sites/3/2023/05/df185bec0dc1f152f967ed103a38af8d25e25610-scaled.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5" alt="" />
    </div>
  )
}
