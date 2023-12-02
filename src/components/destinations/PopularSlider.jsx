import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import destinationDetail from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const PopularSlider = () => {
    const [destinationData, setDestinationData] = useState(destinationDetail)

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 1700,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="popular_slider mt-5"
            >
                {
                    destinationData.map((data) => {
                        return (
                            <SwiperSlide key={data.id}>
                                <div className="d_service_cards">
                                    <div className="imgbx">
                                        <img src={data.image} alt="" />
                                        <div className="box">
                                            <span className='rating'><MdOutlineStar />{data.rating} &nbsp;</span>
                                            <span className='country'><IoLocationSharp />{data.country}&nbsp;</span>
                                        </div>
                                    </div>
                                    <div className="contentbx">
                                        <div className="detail">
                                            <h3>{data.title}</h3>
                                            <p className='desc'>{data.desc}</p>
                                        </div>
                                        <div className="pricebx">
                                            <div className="bx">
                                                <small>Price</small>
                                                <p className='price'><span>Rs {data.price}.00</span>/person</p>
                                            </div>
                                            <Link className='serv_btn' to='#'>Order a Ticket</Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    )
}

export default PopularSlider