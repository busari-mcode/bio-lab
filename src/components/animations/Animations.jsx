import React from 'react'
import './animations.css'

const Animations = () => {
  return (
    <>
        <section className="animations">
            <div className="animations">Below are some animations pertaining to SIIL microfabrication and SIIL enabled gas sensors:</div>
            <div className="assembly">
              <div className="SIIL_assembly">SIIL microsystem assembly:</div>
              <div className="assembly-video-frame">
                <iframe width="560" 
                      height="315" 
                      src="https://www.youtube.com/watch?v=f19rrRaR0Z0" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                </iframe>
              </div>
            </div>
            <div className="sensors">
              <div className="SIIL_sensors">SIIL modular sensors:</div>
              <div className="sensors-video-frame">
                <iframe width="560" 
                      height="315" 
                      src="https://www.youtube.com/watch?v=aOUYMnE9c2E" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
                </iframe>
              </div>
            </div>
        </section>
    </>
  )
}

export default Animations