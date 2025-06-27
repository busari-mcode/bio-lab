import React from 'react'
import './people.css'
import andreas from '../../test_images/Vasdekis_Andreas_UIdaho_photob.avif'
import cas from '../../test_images/Cas_Tuson.avif'
import sulaimon from '../../test_images/sulaimon.avif'
import ram from '../../test_images/ram kasu.avif'
import nathanR from '../../test_images/Nathan rubio.avif'
import adebola from '../../test_images/adebola saseyi.avif'
import saeid from '../../test_images/saeid.avif'
import jinming from '../../test_images/Jinming.avif'
import nathanC from '../../test_images/Nathan Crosby.avif'
import nava from '../../test_images/Nava.avif'
import shahla from '../../test_images/Shahla.avif'
import lochlann from '../../test_images/Lochlann_Dunn.avif'
import cole from '../../test_images/Cole_Thompson_JPEG.avif'
import jon from '../../test_images/Jonathan_Flores.avif'
import tristin from '../../test_images/tristin_PNG.avif'
import michael from '../../test_images/Michale.avif'
import nathan from '../../test_images/Nathan Dice.avif'
import connor from '../../test_images/Connor Delong.avif'
import hamdah from '../../test_images/Hamdah Alanazi.avif'
import norah from '../../test_images/Norah Al Sairy.avif'
import grant from '../../test_images/Grant Thurman.avif'
import adam from '../../test_images/Adam Garman.avif'
import wei from '../../test_images/Wei Hu.avif'
import joshua from '../../test_images/Joshua Quimby.avif'
import joey from '../../test_images/Joey Perko.avif'
import alyssa from '../../test_images/Alyssa Baugh.avif'
import denis from '../../test_images/Denis Liyu.avif'
import rebecca from '../../test_images/Rebecca Winzer.avif'
import amrah from '../../test_images/Amrah Canul.avif'
import joey2 from '../../test_images/Joey Perko2.avif'
import melissa from '../../test_images/Melissa Green.avif'

const People = () => {
  return (
    <>
    {/************************** team_section **************************/}
        <section className="team_section">
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
    {/************************** alumni(postdoctoral scholars) **************************/}
        <section className="alumni_post_doc_section">
          <div className="alumni_post_doc">alumni(postdoctoral&nbsp;scholars)</div>
          <div className="alumni_post_doc_profiles">
              <div className='nava'>
                <img src={nava} alt="" />
                <div>
                  <h3>Nava&nbsp;R.&nbsp;Subedi,&nbsp;PhD</h3>
                  <h3>(now&nbsp;at&nbsp;Intel)</h3>
                </div>
              </div>
              <div className='shahla'>
                <img src={shahla} alt="" />
                <div>
                  <h3>Shahla&nbsp;Nemati,&nbsp;PhD</h3>
                  <h3>(now&nbsp;at&nbsp;Myra&nbsp;Medical)</h3>
                </div>
              </div>
          </div>
        </section>
    {/************************** alumni(students) **************************/}
        <section className="alumni_std_sec">
          <div className="alumni_std">alumni(students)</div>
          <div className="alumni_std_profiles">
              <div className='lochlann'>
                <img src={lochlann} alt="" />
                <div>
                  <h3>Lochlann&nbsp;Dunn</h3>
                  <h3>(laboratory&nbsp;assistant)</h3>
                </div>
              </div>
              <div className='cole'>
                <img src={cole} alt="" />
                <div>
                  <h3>Cole&nbsp;Thompson</h3>
                  <h3>(UG&nbsp;research)</h3>
                </div>
              </div>
              <div className='jon'>
                <img src={jon} alt="" />
                <div>
                  <h3>Jon&nbsp;Flores</h3>
                  <h3>(UG&nbsp;research)</h3>
                </div>
              </div>
              <div className='tristin'>
                <img src={tristin} alt="" />
                <div>
                  <h3>Tristin&nbsp;Sanchez</h3>
                  <h3>(UG&nbsp;research,&nbsp;2020)</h3>
                </div>
              </div>
              <div className='michael'>
                <img src={michael} alt="" />
                <div>
                  <h3>Michale&nbsp;Moldenhauer</h3>
                  <h3>(UG&nbsp;Research,&nbsp;2019)</h3>
                </div>
              </div>
              <div className='nathan'>
                <img src={nathan} alt="" />
                <div>
                  <h3>Nathan&nbsp;Dice</h3>
                  <h3>(UG&nbsp;research,&nbsp;2018)</h3>
                </div>
              </div>
              <div className='connor'>
                <img src={connor} alt="" />
                <div>
                  <h3>Connor&nbsp;Delong</h3>
                  <h3>(UG&nbsp;research,&nbsp;2018)</h3>
                </div>
              </div>
              <div className='hamdah'>
                <img src={hamdah} alt="" />
                <div>
                  <h3>Hamdah&nbsp;Alanazi</h3>
                  <h3>(rot.&nbsp;Grad.&nbsp;Student)</h3>
                </div>
              </div>
              <div className='norah'>
                <img src={norah} alt="" />
                <div>
                  <h3>Norah&nbsp;Al&nbsp;Sairy</h3>
                  <h3>(rot.&nbsp;Grad.&nbsp;Student)</h3>
                </div>
              </div>
              <div className='grant'>
                <img src={grant} alt="" />
                <div>
                  <h3>Grant&nbsp;Thurman</h3>
                  <h3>(UG&nbsp;research,&nbsp;2018)</h3>
                </div>
              </div>
              <div className='adam'>
                <img src={adam} alt="" />
                <div>
                  <h3>Adam&nbsp;Garman</h3>
                  <h3>(UG&nbsp;research,&nbsp;2018)</h3>
                </div>
              </div>
              <div className='wei'>
                <img src={wei} alt="" />
                <div>
                  <h3>Wei&nbsp;Hu</h3>
                  <h3>(UG&nbsp;research,&nbsp;2018)</h3>
                </div>
              </div>
              <div className='joshua'>
                <img src={joshua} alt="" />
                <div>
                  <h3>Joshua&nbsp;Quimby</h3>
                  <h3>(INBRE&nbsp;Fellow,&nbsp;2016)</h3>
                </div>
              </div>
              <div className='joey'>
                <img src={joey} alt="" />
                <div>
                  <h3>Joey&nbsp;Perko</h3>
                  <h3>(UG&nbsp;research)</h3>
                </div>
              </div>
              <div className='alyssa'>
                <img src={alyssa} alt="" />
                <div>
                  <h3>Alyssa&nbsp;Baugh</h3>
                  <h3>(UG&nbsp;research,&nbsp;2015)</h3>
                </div>
              </div>
              <div className='denis'>
                <img src={denis} alt="" />
                <div>
                  <h3>Denis&nbsp;Liyu</h3>
                  <h3>(technician,&nbsp;2015)</h3>
                </div>
              </div>
              <div className='rebecca'>
                <img src={rebecca} alt="" />
                <div>
                  <h3>Rebecca&nbsp;Winzer</h3>
                  <h3>(INBRE&nbsp;Fellow,&nbsp;2015)</h3>
                </div>
              </div>
              <div className='amrah'>
                <img src={amrah} alt="" />
                <div>
                  <h3>Amrah&nbsp;Canul</h3>
                  <h3>(rot.&nbsp;GR,&nbsp;2016)</h3>
                </div>
              </div>
              <div className='joey2'>
                <img src={joey2} alt="" />
                <div>
                  <h3>Joey&nbsp;Perko</h3>
                  <h3>(UG&nbsp;research)</h3>
                </div>
              </div>
              <div className='melissa'>
                <img src={melissa} alt="" />
                <div>
                  <h3>Melissa&nbsp;Green</h3>
                  <h3>(UG&nbsp;research)</h3>
                </div>
              </div>
          </div>
        </section>
    </>
  )
}
export default People