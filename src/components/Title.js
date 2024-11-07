import React from 'react'

const Title = ({text}) => {
  return (
    <>
    <div classname="container">
        <h1 className='text-center mt-3'>{!text ? "text" : text}</h1>    
    </div> 
    </>
  )
}

export default Title