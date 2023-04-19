import React, { useEffect, useState } from "react";
import styled from "styled-components";
import upImg1 from "../Img/carouselImg/CarouselImg1.gif";
import upImg2 from "../Img/carouselImg/CarouselImg2.jpeg";
import upImg3 from "../Img/carouselImg/CarouselImg3.gif";
import upImg4 from "../Img/carouselImg/CarouselImg4.jpeg";
import upImg5 from "../Img/carouselImg/CarouselImg5.gif";
import upImg6 from "../Img/carouselImg/CarouselImg6.jpeg";
import upImg7 from "../Img/carouselImg/CarouselImg7.gif";
import upImg8 from "../Img/carouselImg/CarouselImg8.jpeg";
import downImg1 from "../Img/carouselImg/CarouselDownImg1.jpeg";
import downImg2 from "../Img/carouselImg/CarouselDownImg2.gif";
import downImg3 from "../Img/carouselImg/CarouselDownImg3.gif";
import downImg4 from "../Img/carouselImg/CarouselDownImg4.gif";
import downImg5 from "../Img/carouselImg/CarouselDownImg5.jpeg";
import downImg6 from "../Img/carouselImg/CarouselDownImg6.jpeg";
import downImg7 from "../Img/carouselImg/CarouselDownImg7.jpeg";
import downImg8 from "../Img/carouselImg/CarouselDownImg8.gif";

const upImgArr = [
  upImg1,
  upImg2,
  upImg3,
  upImg4,
  upImg5,
  upImg6,
  upImg7,
  upImg8,
];

const downImgArr = [
  downImg1,
  downImg2,
  downImg3,
  downImg4,
  downImg5,
  downImg6,
  downImg7,
  downImg8,
];
function CarouseContents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [downCurrentIndex, setDownCurrentIndex] = useState(downImgArr.length);
  let upSlides = slidesFunc(upImgArr);
  let downSlides = slidesFunc(downImgArr);
  function slidesFunc(array) {
    let pushArr = []; // 뒤에 추가할 변수
    let unshiftArr = []; // 앞에 추가할 변수
    let index = 0; // 시작위치 설정
    while (index < 2) {
      // index가 array의 길이보다 낮을경우 반복문을 돔
      pushArr.push(...array);
      // push변수에 push로 배열의
      unshiftArr.unshift(...array);
      index++;
    }
    return [...pushArr, ...array, ...unshiftArr];
  }
  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === upSlides.length - 1) {
        setCurrentIndex(0);
      }
    }, 1000);
    setTimeout(() => {
      setDownCurrentIndex(downCurrentIndex - 1);
      if (downCurrentIndex === 0) {
        setDownCurrentIndex(downImgArr.length);
      }
    }, 1000);
  }, [currentIndex]);
  console.log(downSlides);
  return (
    <Wrapper>
      <Title>기술과 서비스</Title>
      <CarouseWrapper>
        <CarouseDisplay
          style={{
            transform: `translateX(${
              -1 * ((100 / upImgArr.length) * currentIndex)
            }%)`,
          }}
        >
          {upSlides.map((img) => (
            <ImgSpace src={img} />
          ))}
        </CarouseDisplay>
        <CarouseDisplay
          style={{
            transform: `translateX(${
              -1 * ((100 / downImgArr.length) * downCurrentIndex)
            }%)`,
          }}
        >
          {downSlides.map((img) => (
            <ImgSpace src={img} />
          ))}
        </CarouseDisplay>
      </CarouseWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  margin: 5% 0 5% 10%;

  font-size: 50px;
  font-weight: bolder;
`;
const CarouseWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;
const CarouseDisplay = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const ImgSpace = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 30px;
  margin: 0px 30px;
`;

export default CarouseContents;