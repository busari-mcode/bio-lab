import React from 'react'
import './labpics.css'
import farewell from '../../test_images/farewell.avif'
import pouring from '../../test_images/pouring_plates.avif'
import award from '../../test_images/ug_research_award.avif'
import presentation from '../../test_images/presentations.avif'
import scaring_yeast from '../../test_images/scaring_yeast.avif'
import laser from '../../test_images/checking_the_laser.avif'
import christmas from '../../test_images/christmas.avif'
import imaging from '../../test_images/imaging.avif'

const LabPics = () => {
  return (
    <>
        <section className="lab_pics">
          <div className='farewell'>
            <img src={farewell} alt="" />
            <h4>farewell&nbsp;in&nbsp;the&nbsp;time&nbsp;of&nbsp;COVID&nbsp;-&nbsp;all&nbsp;the&nbsp;Best&nbsp;Shahla&nbsp;and&nbsp;Nava&nbsp;(2021)</h4>
          </div>
          <div className='pouring'>
            <img src={pouring} alt="" />
            <h4>pouring&nbsp;plates (Gurkeerat,&nbsp;2020)</h4>
          </div>
          <div className='ug_award'>
            <img src={award} alt="" />
            <h4>UG&nbsp;research&nbsp;award (G.&nbsp;Thurman,&nbsp;2018)</h4>
          </div>
          <div className='presentation'>
            <img src={presentation} alt="" />
            <h4>end&#8209;of&#8209;semester&nbsp;presentations&nbsp;(2018)</h4>
          </div>
          <div className='scaring_yeast'>
            <img src={scaring_yeast} alt="" />
            <h4>"Scaring"&nbsp;yeast&nbsp;(N&nbsp;.Dice,&nbsp;2018)</h4>
          </div>
          <div className='laser'>
            <img src={laser} alt="" />
            <h4>"checking"&nbsp;the&nbsp;laser (A.&nbsp;Garman,&nbsp;2016)</h4>
          </div>
          <div className='christmas'>
            <img src={christmas} alt="" />
            <h4>Christmas&nbsp;(Mexican)&nbsp;dinner&nbsp;(2016)</h4>
          </div>
          <div className='imaging'>
            <img src={imaging} alt="" />
            <h4>Imaging... (J.&nbsp;Quimby,&nbsp;2015)</h4>
          </div>
        </section>
    </>
  )
}

export default LabPics