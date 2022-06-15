import '../components/styles/home.css'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/styles/carousel.css";
import { SliderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";




export const Home=(()=>{
    return <div>
        <div id="back-img" >
            <div id='asw-div' > <div id='text-asw'> ASHWAGANDHA</div> </div>
            <div id='des-div' >A star performer for stress and energy in a potent, organic caplet.</div>
            <div id='btn-now'>
            <button id='btn' >Shop now</button>
            </div>
           
        </div>
        <div id='shop-category' >
            <div id='text-1' >Shop By Category</div>
            <div id='box-outer' >
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1607451904" alt="" />
                    <div id='bottom-text' >Supplements</div>
                    <div id='bottom-text-2'>See All Supplemets</div>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1607451904" alt="" />
                    <div id='bottom-text' >Oral Care</div>
                    <div id='bottom-text-2'>See All Oral Care</div>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1607451904" alt="" />
                    <div id='bottom-text' >Personal Care</div>
                    <div id='bottom-text-2'>See All Personal Care</div>
                </div>
            </div>
        </div>
       <Carousel/>
       <div id='bottom-div-2'>
        <div id='inner-div-2' >
            <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475" alt="" />
            <div id='text-div-main'>
                <span id='inner-text-1'>Unlock the Wisdom of Herbs</span>
                <div  id='inner-text-2'>with Herbal Supplements, Toothpaste & More!</div>
                <div id='para-div-1' style={{marginTop:"15px"}}>Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.</div>
            </div>
        </div>
       </div>





    </div>
})

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "black", fontSize: "30px" }}
        />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ color: "black", fontSize: "30px" }}
        />
      </div>
    );
  };
  
  const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 4,
    // infinite={false}
    // slidesToScroll={3}
    centerMode: true,
    centerPadding: "7px",
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const Carousel = () => {
    return (
      <div style={{ margin: "30px" }} className="carousel">
        <h1 className="cHead" id='heading-text'>Best Sellers</h1>
     
        <Slider {...carouselProperties}>
          {SliderData.map((item) => (
            <Card item={item} />
            
          ))}
      
        </Slider>
       
      </div>
    );
  };
  
  const Card = ({ item }) => {
    return (
      <div style={{ textAlign: "center" }}>
        <img
          className="multi__image"
          src={item}
          alt=""
          style={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </div>
    );
  };
  
  export default Carousel;