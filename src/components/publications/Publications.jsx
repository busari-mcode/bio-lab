import React from 'react'
import './publications.css'

const Publications = () => {
  return (
    <>
        <section className="publications">
            <div className="top_section">
              <div className="book">Book&nbsp;Chapters</div>
              <div className="journals">Journals</div>
              <div className="patent">Patents</div>
            </div>
            <div className="book_chp">
              <h6>Book Chapters</h6>
              <ol>
                <li>A. E. Vasdekis, G. Stephanopoulos, <a href="https://link.springer.com/chapter/10.1007/978-3-319-30019-1_9" target="_blank">'Single Cell Phenotypic Screening in Inverse Metabolic Engineering', in Microfluidic Methods for Molecular Biology</a> Springer (2016).</li>
              </ol>
            </div>
        </section>
    </>
  )
}

export default Publications