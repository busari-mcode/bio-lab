import React from 'react'
import './phys.css'

const Phys = () => {
  return (
    <>
        <section className="phys">
            <p className="instruction">click on the icon to download the images and lecture notes:</p>
            <div className="icon">
              <a href="/files/aevlab_phys411.zip" download><i class="fa-regular fa-eye"></i></a>
            </div>
        </section>
    </>
  )
}

export default Phys