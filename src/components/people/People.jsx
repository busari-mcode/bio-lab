import React from 'react'
// import images from '../../../public'
// import test_images from '../../test_images'
import prof from '../../test_images/Vasdekis_Andreas_UIdaho_photob.avif'

// import 'public\images\Vasdekis_Andreas_UIdaho_photob.avif'
// import { team } from 'public\images\Vasdekis_Andreas_UIdaho_photob.avif'

const People = () => {
  return (
    <>
        <section className="team">
            {/* {team.map((val) => {
              <div className="img"> 
                <img src={val.cover} alt=""/>
              </div>
            })} */}
            <h1>He</h1>
            <img src={prof} alt="" />
        </section>
    </>
  )
}
export default People