import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import MainBanner from '../../components/home/MainBanner'
import DestinationSliders from '../../components/destinations/DestinationSliders'
import Logos from '../../components/home/Logos'
import PopularSlider from '../../components/destinations/PopularSlider';
import ExperienceImg from '../../assets/experience-img.png'
import { IoLocationSharp } from "react-icons/io5";
import ExIcon1 from '../../assets/icon-1.png'
import ExIcon2 from '../../assets/icon-2.png'
import ExIcon3 from '../../assets/icon-3.png'
import GalleryImg1 from '../../assets/gallery-img-1.png'
import GalleryImg2 from '../../assets/gallery-img-2.png'
import GalleryImg3 from '../../assets/gallery-img-3.png'
import GalleryImg4 from '../../assets/gallery-img-4.png'
import { IoStar } from "react-icons/io5";
import ReviewImg from '../../assets/review-img-1.png'

const Home = () => {
  return (
    <>
      <MainBanner />
      <Logos />
      <div className="destination_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="heading">
                <h3>Best Destination Places</h3>
                <p>We provide several spot choices for those of you who<br /> want to ride a hot air balloon</p>
              </div>
            </div>
          </div>
          <div className="row">
            <DestinationSliders />
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="box text-center">
                <div className="btn_box">
                  <button className="icon-btn">
                    See All
                    <span className='icon'>
                      <IoIosArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="most_popular_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="heading">
                <h3>Destination<br />
                  Most Popular</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="heading">
                <p>Some of the most popular destinations for<br />
                  take a hot air balloon ride with a view<br />
                  the beautiful one.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <PopularSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="experience_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="heading">
                <h3>Get Experience<br />
                  Which are fun</h3>
                <p>With BalonKUN you can get a very enjoyable experience<br /> of riding a hot air balloon.</p>
              </div>
              <div className="img-box">
                <img src={ExperienceImg} alt="" />
                <div className="box">
                  <span className='country'><IoLocationSharp />{"Turkey"}&nbsp;</span>
                  <span className='rating'> &nbsp;</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="icons-bx">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="box">
                      <img src={ExIcon1} alt="" />
                      <div className="cont">
                        <h3>Affordable prices</h3>
                        <p>We provide several very affordable prices compared to others. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo sit voluptates ullam ad voluptatem.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="box">
                      <img src={ExIcon2} alt="" />
                      <div className="cont">
                        <h3>Unforgettable experience</h3>
                        <p>We provide an unforgettable hot air balloon experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore aliquid eaque nemo voluptate fuga.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="box">
                      <img src={ExIcon3} alt="" />
                      <div className="cont">
                        <h3>Very Friendly Service</h3>
                        <p>We will provide excellent and friendly service for the sake of our customers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, esse aperiam minima dolore iure a.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="heading">
                <h3>Our Gallery</h3>
                <p>We have some documentation that we made ourselves <br /> while we were at the hot air balloon spot.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="btbox">
                <div className="btn_box">
                  <button className="icon-btn">
                    See All
                    <span className='icon'>
                      <IoIosArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="img-box first">
                <img src={GalleryImg1} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="boximages">
                <div className="mainBx">
                  <div className="img-box">
                    <img src={GalleryImg2} alt="" />
                  </div>
                </div>
                <div className="mainBx">
                  <div className="box">
                    <div className="img-box">
                      <img src={GalleryImg3} alt="" />
                    </div>
                  </div>
                  <div className="box">
                    <div className="img-box">
                      <img src={GalleryImg4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="testimonials_box">
                <div className="box">
                  <img src={ReviewImg} alt="" />
                  <h4>John Doe</h4>
                  <div className="stars">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                  <p className="desc">"A very pleasant experience, plus the service is very friendly, really top, recommended for those who want to try it!"</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="heading">
                <h3>Testimonial<br />
                  BalonKUN Customer</h3>
                <p>What do our customers feel when they are with BalonKU,<br /> check out the following!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home