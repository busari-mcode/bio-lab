import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
        <section className="home">
            <ul>
                <li>home</li>
                <li>people</li>
                <li>publications</li>
                <li>lab pictures</li>
                <li>join</li>
                <li>animations</li>
                <li>teaching (just the fun stuff)</li>
                <li>University of Idaho - PHYS411</li>
                <li>equipment booking</li>
            </ul>
            <div className="images">
                <img src="../../images/3-d.avif" alt="" />
                <img src="../../images/microfludics.avif" alt="" />
                <div className="set3">
                    <img src="../../images/target-sample.avif" alt="" />
                    <img src="../../images/imaging.gif" alt="" />
                </div>
                <div className="live-cells">
                    <img src="../../images/live-cells-trapping.gif" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home