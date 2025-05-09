import React from 'react'
import { team } from '../../dummydata'

const People = () => {
  return (
    <>
        <section className="team">
            {team.map((val) => {
              <div className="img"> 
                <img src={val.cover} alt=""/>
              </div>
            })}
        </section>
    </>
  )
}

export default People