import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import MainSlider from './MainSlider';

const MainBanner = () => {
    return (
        <div className="home_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="content">
                            <h1>Enjoy your holiday with <span>BalonKUN</span> Travel</h1>
                            <p>With BalonKUN you can experience a new experience by riding a hot air balloon with beautiful views of the surroundings to spoil your eyes.</p>
                            <div className="btn_box">
                                <button className="icon-btn">
                                    View Destinations
                                    <span className='icon'>
                                        <IoIosArrowForward />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="main_slider_home">
                            <MainSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner