import React from 'react'
import image_1 from '../../assets/logo-1.png'
import image_2 from '../../assets/logo-2.png'
import image_3 from '../../assets/logo-3.png'
import image_4 from '../../assets/logo-4.png'

const Logos = () => {
  return (
    <div className="logos_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="img-bx">
                        <img src={image_1} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="img-bx">
                        <img src={image_2} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="img-bx">
                        <img src={image_3} alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="img-bx">
                        <img src={image_4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logos