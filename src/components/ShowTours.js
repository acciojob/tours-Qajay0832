import React, { useState } from 'react'
import './showTours.css'

const ShowTours = (props) => {
  const [isExpanded, setIsExpanded] = useState(props.info.slice(0,200))
  const [showMore, setShowMore] = useState('Show more');
  const ShowMore=()=>{
    if(showMore=='Show more'){
    setIsExpanded(props.info);
    setShowMore('Show less');}
    else{
      setIsExpanded(props.info.slice(0,200));
    setShowMore('Show more');
    }

  }
  // console.log('delete',props.onDelete);
  
  return (
    <div>
        <div className='heading'><p>{props.name}</p><p>{props.price}</p></div>
        <img src={props.image}/>
        <p>{isExpanded}</p>
        <p className='showMore' onClick={ShowMore}>{showMore}</p>
        <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default ShowTours