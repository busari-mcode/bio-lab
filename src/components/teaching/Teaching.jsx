import React from 'react'
import './teaching.css'
import pics1 from '../../test_images/Picture1.avif'
import pics2 from '../../test_images/Picture2.avif'
import pics3 from '../../test_images/Picture3.avif'
import pics4 from '../../test_images/Picture4.avif'
import pics5 from '../../test_images/Picture5.avif'
import pics6 from '../../test_images/Picture6.avif'

const Teaching = () => {
  return (
    <>
        <section className="teaching">
            <h3>some fun drawings (from homework and exam papers):</h3>
            <img src={pics1} alt="" />
            <img src={pics2} alt="" />
            <img src={pics3} alt="" />
            <img src={pics4} alt="" />
            <img src={pics5} alt="" />
            <img src={pics6} alt="" />
        </section>
    </>
  )
}

export default Teaching