import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import destinationDetail from '../../data'

const MainSlider = () => {

  const [destinationData, setDestinationData] = useState(destinationDetail)

  return (
    <>
      <Swiper
        effect={'coverflow'}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="home_main_slider"
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

export default MainSlider