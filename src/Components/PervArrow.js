// FaChevronLeft
// FaChevronRight


import React from 'react'

const PervArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={className }
      style={{ ...style,
         background: "#3E3E3E",
         opacity:'.39',
         borderRadius:'50%', 
         border:'0px',
         left:'-45px',
         
         position:'absolute',
         display:'flex', 
         justifyContent:'center',
         alignItems:'center' ,
         padding:'4px' }}
      onClick={onClick}
    ></div>
  )
}

export default PervArrow;