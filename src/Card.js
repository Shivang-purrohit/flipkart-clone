import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css'

const Card = ({name, mainPrice, brand, image , price,discountPercent, quantity, gender, sizes} ) => {
  return (
    <div className='card'>
       <div className="card__heart">
          <FavoriteIcon/>
       </div>
<div className="card__image">
    <img src={image} alt="" />
</div>
<div className="card__details">
    <p className='title'>{brand}</p>
    <p>{name}</p>
   
    <span className='span1'>₹{mainPrice}</span>
    <span className='span2'>₹{price}</span>
    <span className='span3'>{discountPercent}% off</span>
</div>
<div className="card__size">
<p>Size <span>{sizes}</span> {gender}</p>
</div>

    </div>
  )
}

export default Card

