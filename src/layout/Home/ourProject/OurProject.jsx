import React from 'react'
import '../ourProject/ourproject.css'
import one from '../../../assets/design.avif'
const OurProject = () => {
    const data = [
        {
            img:one,
            head:"WEB DESIGN",
          para:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            img:one,
            head:"WEB DESIGN",
          para:"A small river named Duden flows by their place and supplies it with the necessary regelialia. "
        },
        {
            img:one,
            head:"WEB DESIGN",
          para:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            img:one,
            head:"WEB DESIGN",
          para:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            img:one,
            head:"WEB DESIGN",
          para:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            img:one,
            head:"WEB DESIGN",
          para:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },

    ]
  return (
    <div className='our-project-container'>
        <h1>Services</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className="portfolio-container">
                {
                    data.map((el, i) => (
                        <div className="portfolio-box" key={i}>
                            <img src={el.img} alt="" />
                            <div className="portfolio-layer">
                                <p>{el.head}</p>
                                <p> {el.para} </p>
                              
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
  )
}

export default OurProject