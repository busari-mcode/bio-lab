import React from 'react'
import './people.css'
// import images from '../../../public'
// import test_images from '../../test_images'
// import 'public\images\Vasdekis_Andreas_UIdaho_photob.avif'
// import { team } from '../../dummydata'
import andreas from '../../test_images/Vasdekis_Andreas_UIdaho_photob.avif'
import cas from '../../test_images/Cas_Tuson.avif'
import sulaimon from '../../test_images/sulaimon.avif'
import ram from '../../test_images/ram kasu.avif'
import nathanR from '../../test_images/Nathan rubio.avif'
import adebola from '../../test_images/adebola saseyi.avif'
import saeid from '../../test_images/saeid.avif'
import jinming from '../../test_images/Jinming.avif'
import nathanC from '../../test_images/Nathan Crosby.avif'

const People = () => {
  return (
    <>
        <section className="team_section">
            {/* {team.map((val) => {
              <div className="img"> 
                <img src={val.cover} alt=""/>
              </div>
            })} */}
            <div className="team">team</div>
            <div className="profiles">
            <div className="andreas">
             <img src={andreas} alt="" />
              <div>
                <h3>Andreas&nbsp;E.&nbsp;Vasdekis</h3>
                <h3>(pi)</h3>
             </div>
            </div>
            <div className="cas">
             <img src={cas} alt="" />
              <div>
                <h3>Cas&nbsp;Tuson</h3>
                <h3>(GR&nbsp;student)</h3>
             </div>
            </div>
            <div className="sulaimon">
             <img src={sulaimon} alt="" />
              <div>
                <h3>Sulaimon&nbsp;Balogun</h3>
                <h3>(GR&nbsp;student)</h3>
             </div>
            </div>
            <div className="ram">
             <img src={ram} alt="" />
              <div>
                <h3>Ram&nbsp;Kasu</h3>
                <h3>(postdoctoral&nbsp;scholar)</h3>
             </div>
            </div>
            <div className="nathanR">
             <img src={nathanR} alt="" />
              <div>
                <h3>Nathan&nbsp;Rubio</h3>
                <h3>(UG&nbsp;research)</h3>
             </div>
            </div>
            <div className="adebola">
             <img src={adebola} alt="" />
              <div>
                <h3>Adebola&nbsp;Saseyi</h3>
                <h3>(GR&nbsp;student)</h3>
             </div>
            </div>
            <div className="saeid">
             <img src={saeid} alt="" />
              <div>
                <h3>Saeid&nbsp;Sarollahi</h3>
                <h3>(postdoctoral&nbsp;scholar)</h3>
             </div>
            </div>
            <div className="jinming">
             <img src={jinming} alt="" />
              <div>
                <h3>Jinming&nbsp;Zhang</h3>
                <h3>(GR&nbsp;student)</h3>
             </div>
            </div>
            <div className="nathanC">
             <img src={nathanC} alt="" />
              <div>
                <h3>Nathan&nbsp;Crosby</h3>
                <h3>(UG&nbsp;research)</h3>
             </div>
            </div>
            </div>

        </section>
    </>
  )
}
export default People