import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <section className='h-[100vh] w-[100%] bg-[#0000003f] fixed top-0 left-0'>
<div id="container">
  <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
    </section>
  )
}

export default Spinner
