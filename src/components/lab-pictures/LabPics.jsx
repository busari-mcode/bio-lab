import React from 'react'
import './labpics.css'
import farewell from '../../test_images/farewell.avif'
import pouring from '../../test_images/pouring_plates.avif'
import award from '../../test_images/ug_research_award.avif'
import presentation from '../../test_images/presentations.avif'
import scaring_yeast from '../../test_images/scaring_yeast.avif'
import laser from '../../test_images/scaring_yeast.avif'
import christmas from '../../test_images/christmas.avif'
import imaging from '../../test_images/imaging.avif'

const LabPics = () => {
  return (
    <>
        <section className="lab-pics">
            <h1>pictures</h1>
            <img src={farewell} alt="" />
        </section>
    </>
  )
}

export default LabPics