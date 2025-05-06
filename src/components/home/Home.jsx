import React from 'react'
import './home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  return (
    <>
        <section className="home">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/people">people</Link></li>
                <li><Link to="/publications">publications</Link></li>
                <li><Link to="/labpics">lab pictures</Link></li>
                <li><Link to="/join">join</Link></li>
                <li><Link to="/animations">animations</Link></li>
                <li><Link to="/teaching">teaching (just the fun stuff)</Link></li>
                <li><Link to="/phys">University of Idaho - PHYS411</Link></li>
                <li><Link to="/equipbook">equipment booking</Link></li>
            </ul>
            <div className="images">
                <div className="cord">
                    <img src="../../images/3-d.avif" alt="" />
                </div>
                <div className="microfludics">
                    <img src="../../images/microfludics.avif" alt="" />
                </div>
                <div className="set3">
                    <div className="target-sample">
                        <img src="../../images/target-sample.avif" alt="" />
                    </div>
                    <div className="imaging">
                        <img src="../../images/imaging.gif" alt="" />
                    </div>
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