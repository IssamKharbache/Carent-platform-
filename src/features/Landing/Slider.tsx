import React from "react";
import { Carousel } from "@mantine/carousel";
import { Center, Image } from "@mantine/core";
const images = [
  "https://res.cloudinary.com/dehf7efuh/image/upload/v1719324212/carent/j13nxnit4zfllhrdnbkj.png",
  "https://res.cloudinary.com/dehf7efuh/image/upload/v1719324174/carent/cucroybjpwh1oxir3tyj.png",
];

const Slider = () => {
  return (
    <>
      <Carousel withIndicators loop>
       {
        images.map((image,index)=>{
            return(
                <Carousel.Slide key={index} mt="2rem">
                    <Center h={{base:300,md:400,lg:600}} >
                         <Image src={image} />
                    </Center>
                
              </Carousel.Slide>
            )
        })
       }
      </Carousel>
    </>
  );
};

export default Slider;
