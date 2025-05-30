import React from 'react'
import './join.css'
import mountain from '../../test_images/Moscow_mountain_view.avif'
import river from '../../test_images/river_JPG.avif'

const Join = () => {
  return (
    <>
        <section className="join_sect">
            <div className="phd_pos_sect">
              <div className="phd_pos">
                <h4>Join us!</h4>
                <h5>Ph.D. Positions</h5>
                <p>We accept Ph.D. student applications from the <a href="https://www.uidaho.edu/sci/bcb" target='_blank'>Physics, Bioinformatics and Computational Biology and Chemical and Biological Engineering</a> graduate programs. Contact <a href="mailto:andreasv@uidaho.edu" target="_blank">Andreas</a> for more info.</p>
              </div>
              <img src={mountain} alt="" />
            </div>
            <div className="postdoc_pos_sect">
              <div className="postdoc_pos">
                <h5>Postdoctoral Positions</h5>
                <p>We currently do not have openings. But if interested in our research, please get in <a href="mailto:andreasv@uidaho.edu" target='_blank'>touch</a> to discuss further.</p>
              </div>
            <img src={river} alt="" />
            </div>
        </section>
    </>
  )
}

export default Join