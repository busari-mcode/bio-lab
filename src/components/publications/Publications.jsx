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

            {/* book chapters */}
            <div className="book_chp">
              <h6>Book Chapters</h6>
              <ol>
                <li><a href="https://link.springer.com/chapter/10.1007/978-3-319-30019-1_9" target='_blank'>A. E. Vasdekis, G. Stephanopoulos, <span>'Single Cell Phenotypic Screening in Inverse Metabolic Engineering', in Microfluidic Methods for Molecular Biology</span> Springer (2016).</a></li>
              </ol>
            </div>

            {/* journals */}
            <div className="journals_section">
              <h6>Journals</h6>
              <ol reversed>
                <li><a href="https://www.nature.com/articles/s41598-024-60057-y" target='_blank'>Jinming Zhang, Mirsaeid Sarollahi, Shirley Luckhart, Maria J. Harrison, and Andreas E. Vasdekis, <span>'Quantitative Phase Imaging by Gradient Retardance Optical Microscopy'</span>, Scientific Reports 14, 9754 (2024).</a></li>
                <li><a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/jbio.202300068" target='_blank'>Nava R. Subedi, Sergey Stolyar, Sabrina J. Tuson, Christopher J. Marx, and Andreas E. Vasdekis, <span>'Scattered-light-sheet microscopy with sub-cellular resolving power'</span>, Journal of Biophotonics e202300068 (2023).</a></li>
                <li><a href="https://www.pnas.org/doi/abs/10.1073/pnas.2210037120" target='_blank'>Lochlann Dunn, Haokun Luo, Nava R. Subedi, Ramachandran Kasu, Armando G. McDonald, Demetrios N. Christodoulides, and Andreas E. Vasdekis, <span>'Video-rate Raman-based metabolic imaging by Airy light-sheet illumination and photon-sparse detection'</span>, Proceedings of the National Academy of Sciences 120, e2210037120 (2023).</a></li>
                <li><a href="https://www.nature.com/articles/s42003-022-03348-2" target='_blank'>S. Nemati, A. Singh, S. D. Dhuey, A. McDonald, D. M. Weinreich, A. E. Vasdekis, <span>'Density fluctuations, homeostasis, and reproduction effects in bacteria'</span>, Communications Biology 5, 397 (2022).</a></li>
                <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S1878818121003376?dgcid=coauthor#gs3" target='_blank'>G. Kukal, A. E. Vasdekis, A. G. McDonald, <span>'Raman-probes for monitoring metabolites and nutrient fate in Yarrowia lipolytica using deuterated glucose'</span>, Biocatalysis and Agricultural Biotechnology 39, 102241 (2022).</a></li>
                <li><a href="https://pubs.acs.org/doi/abs/10.1021/acsphotonics.1c01142" target='_blank'>T. Sanchez, N. R. Subedi, C. Thompson, L. Sheneman, A. E. Vasdekis, <span>'Photon-Sparse, Poisson Light-Sheet Microscopy'</span>, ACS Photonics 8, 2876 (2021).</a></li>
                <li><a href="https://opg.optica.org/oe/fulltext.cfm?uri=oe-29-20-31941&id=459719" target='_blank'>N. R. Subedi, S. Yaraghi, P. S. Jung, G. Kukal, A. G. McDonald, D. N. Christodoulides, A. E. Vasdekis, <span>'Airy light-sheet Raman imaging'</span>, Optics Express, 29, 31941 (2021).</a></li>
                <li><a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0249196" target='_blank'>L. Sheneman, Gregory Stephanopoulos, A. E. Vasdekis, <span>'Deep Learning Classification of Lipid Droplets in Quantitative Phase Images'</span>, PLOS ONE 16, e0249196 (2021).</a></li>
                <li><a href="https://www.nature.com/articles/s41598-020-76730-x" target='_blank'>N. R. Subedi, P. S. Jung, E. L. Bredeweg, S. Nemati, S. E. Baker, D. N. Christodoulides, A. E. Vasdekis, <span>'Integrative quantitative-phase and airy light-sheet imaging'</span>, Scientific Reports 10, 20150 (2020).</a></li>
                <li><a href="https://wires.onlinelibrary.wiley.com/doi/abs/10.1002/wsbm.1512" target='_blank'>A. E. Vasdekis, A. Singh, <span>'Microbial Metabolic Noise'</span>, Wiley Systems Biology and Medicine, doi: 10.1002/wsbm.1512 (2020).</a></li>

                {/* continue from 40 */}
              </ol>
            </div>
            
        </section>
    </>
  )
}

export default Publications