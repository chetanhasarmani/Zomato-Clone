// FaChevronLeft
// FaChevronRight

import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        background: "#3E3E3E",
        opacity:'.39',
        position:'absolute',
         right:'-35px'  , 
         borderRadius:'50%', 
         display:'flex', 
         justifyContent:'center',
         alignItems:'center' ,
         padding:'4px' }}
      onClick={onClick}
    ></div>
  )
}

export default NextArrow;