import React from 'react'

const Banner = ({ title, scrollerText }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <div>Explore tours &darr;</div> */}
      {scrollerText ? <div>{scrollerText} &darr;</div> : ''}
    </>
  )
}

export default Banner
