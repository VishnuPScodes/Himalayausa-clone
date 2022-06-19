import '../components/styles/home.css'
import React, { Component } from "react";
import { Box ,HStack,Image, Link, SimpleGrid, Stack} from '@chakra-ui/react';
import {FaFacebookF} from 'react-icons/fa' 
import { FaInstagram } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/styles/carousel.css";
import { SliderData } from "./SliderData";
import { SliderData2 } from "./SliderData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';




export const Home=(()=>{
  const navigate=useNavigate()
    return <div  >
        <div id="back-img" >
            <div id='asw-div' > <div id='text-asw'> ASHWAGANDHA</div> </div>
            <div id='des-div' >A star performer for stress and energy in a potent, organic caplet.</div>
            <div id='btn-now'>
            <button id='btn' onClick={(()=>{
              navigate('/ProductDetailsHerbal/35')
            })} >Shop now</button>
            </div>
           
        </div>
       
           
            <Stack id='shop-category'  >
            <div id='text-1' >Shop By Category</div>
            <SimpleGrid id='box-outer' columns={{
          base:"1",
          sm:"2",
          md:"3"
      }} >
                <Box w={{base:"100%",md:"100%",sm:"100%"}}>
                    <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1607451904" alt="" />
                    <div id='bottom-text' >Supplements</div>
                    <Link href='/Herbal' id='bottom-text-2' color={{sm:"red",md:"green"}}>See All Supplemets</Link>
                </Box>
                <Box w={{base:"100%",md:"100%",sm:"100%"}}>
                    <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1607451904" alt="" />
                    <div id='bottom-text' >Oral Care</div>
                    <div id='bottom-text-2'>See All Oral Care</div>
                </Box>
                <Box w={{base:"100%",md:"100%",sm:"100%"}}>
                    <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1607451904" alt="" />
                    <div id='bottom-text' >Personal Care</div>
                    <div id='bottom-text-2'>See All Personal Care</div>
                </Box>
            </SimpleGrid>

        </Stack>
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
       <Carousel2/>
     <div id='social-text'>Follow us @himalayausa <FaInstagram id='logo-insta'/> <FaFacebookF id='icon-fb' /> </div>

     <HStack  width={'95%'} margin={'auto'}>
        <Box id='social-media' w={'300px'}  h={'200px'}>
            <Image  src='https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=UGMcEfEpxE8AX9A5fu-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9zWrI1IhickF9x3SQP0KC9rI3xSwvuNa97oeRKm9KLIA&oe=62ADDC87' />
        </Box>
        <Box id='social-media'  w={'300px'} h={'200px'}>
            <Image src='https://scontent.cdninstagram.com/v/t51.2885-15/277292932_5613162492028340_2851075865814001728_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ItsIc4cIzTsAX82kuzY&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT98HNBdtVG1tsrH1PFENI2bjB-OhXzRqWwHfKMc_2hcrA&oe=62AE140B' />
        </Box>
        <Box id='social-media'  w={'300px'} h={'200px'}>
            <Image src='https://scontent.cdninstagram.com/v/t51.2885-15/210602775_2989071524684964_2920882526894167214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=l9q4K1b3RhcAX-CoRtw&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_JJQoZwpe6UIvaN2t22BTA3QXEu_t67k0ulHANZcJIgA&oe=62ADB945' />
        </Box>
        <Box id='social-media'  w={'300px'} h={'200px'}>
            <Image src='https://scontent.cdninstagram.com/v/t51.2885-15/204274359_2975479076040360_2380187042423867081_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=9QfeIrZ97OoAX_32Tw3&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_BDa1FiBofYuT43NoaIyfai2mVW0v2yy8CDNiQGXq7yw&oe=62AE3EEB' />
        </Box>
     </HStack>





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
            <Card key={Date.now} item={item} />
            
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
  

  const Carousel2 = () => {
    return (
      <div style={{ margin: "30px" }} className="carousel">
        {/* <h1 className="cHead" id='heading-text'>Best Sellers</h1> */}
     
        <Slider {...carouselProperties}>
          {SliderData2.map((item) => (
            <div key={Date.now} id='card-1'> 
            <p id='comment'>{item.name}
            <br /> <br /> 
            <p id='author'>{item.author}</p>
            </p>
            </div>
        
            
          ))}
         
          {/* {authors.map((item)=>{

            return <p>{item}</p>
          })} */}
      
        </Slider>
       
      </div>
    );
  };
  export default Carousel;