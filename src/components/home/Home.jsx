import React from 'react'
import './home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import cord from '../../test_images/3-d.avif'
import microfludics from '../../test_images/microfludics.avif'
import targetsample from '../../test_images/target-sample.avif'
import laser from '../../test_images/laser-spot.gif'
import cells from '../../test_images/live-cells-trapping.gif'

const Home = () => {
  return (
    <>
        <section className="home">
            <ul>
                <li><Link to="/" className='page'>home</Link></li>
                <li><Link to="/people" className='people'>people</Link></li>
                <li><Link to="/publications" className='publications'>publications</Link></li>
                <li><Link to="/labpics" className='labpics'>lab pictures</Link></li>
                <li><Link to="/join" className='join'>join</Link></li>
                <li><Link to="/animations" className='animations'>animations</Link></li>
                <li><Link to="/teaching" className='teaching'>teaching (just the fun stuff)</Link></li>
                <li><Link to="/phys" className='phys'>University of Idaho - PHYS411</Link></li>
                <li><Link to="/equipbook" className='equipbook'>equipment booking</Link></li>
            </ul>
            <div className="images">
                <div className="cord">
                    <img src={cord} alt="" />
                </div>
                <div className="microfludics">
                    <img src={microfludics} alt="" />
                </div>
                <div className="set3">
                    <div className="target-sample">
                        <img src={targetsample} alt="" />
                    </div>
                    <div className="laser-spot">
                        <img src={laser} alt="" /> 
                    </div>
                </div>
                <div className="live-cells">
                    <img src={cells} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Home