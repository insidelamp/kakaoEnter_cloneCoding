import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bannerImg1 from "../Img/mainImg/kakaoenterMain1.png";
import bannerImg2 from "../Img/mainImg/kakaoenterMain2.png";
import bannerImg3 from "../Img/mainImg/kakaoenterMain3.png";
import bannerImg4 from "../Img/mainImg/kakaoenterMain4.png";
import bannerImg5 from "../Img/mainImg/kakaoenterMain5.png";
import { BsCaretRightFill, BsDot } from "react-icons/bs";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { IoMdPause } from "react-icons/io";

function Contents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [palseState, setPalseState] = useState(false);

  const bannerImgArr = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
  ];
  function handleSlide(currentIndex) {
    console.log(currentIndex);
    if (currentIndex === bannerImgArr.length) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = bannerImgArr.length - 1;
    }
    setCurrentIndex(currentIndex);
  }

  function handleSwipe(direction) {
    handleSlide(currentIndex + direction);
  }
  useEffect(() => {
    if (palseState === false) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === bannerImgArr.length - 1) {
          setCurrentIndex(0);
        }
      }, 1000);
    }
  }, [currentIndex]);

  function conentsDiv() {
    if (currentIndex === 0) {
      return (
        <>
          <BannerImgContents>중진공 지원 사업 참여하고</BannerImgContents>
          <br />
          <BannerImgContents>
            카카오 i 라스 70% 할인 받으세요!
          </BannerImgContents>
        </>
      );
    } else if (currentIndex === 1) {
      return (
        <>
          <BannerImgContents>안면인식.지능형CCTV 인증 획득</BannerImgContents>
          <br />
          <BannerImgContents>"AI로 보안 강화"</BannerImgContents>
        </>
      );
    } else if (currentIndex === 2) {
      return (
        <>
          <BannerImgContents>카카오 i 라스,</BannerImgContents>
          <br />
          <BannerImgContents>
            더 쉽고 편리해진 매칭 리뉴얼 오픈
          </BannerImgContents>
        </>
      );
    } else if (currentIndex === 3) {
      return (
        <>
          <BannerImgContents>KAKAO ENTERPRISE</BannerImgContents>
          <br />
          <BannerImgContents>AI REPORT 발간</BannerImgContents>
        </>
      );
    } else if (currentIndex === 4) {
      return (
        <>
          <BannerImgContents>KREW TALK</BannerImgContents>
          <br />
          <BannerImgContents>
            우리는 카카오엔터프라이즈에서 일합니다
          </BannerImgContents>
        </>
      );
    }
  }

  return (
    <ContentsSpace>
      <GrayBaground />
      <ImgBox
        style={{
          transform: `translateX(${
            -1 * ((100 / bannerImgArr.length) * currentIndex)
          }%)`,
        }}
      >
        {bannerImgArr.map((images, idx) => (
          <BannerImg src={images} key={idx} />
        ))}
      </ImgBox>
      <ContentsBannerImg>
        <InsideImgContents>
          {conentsDiv(currentIndex)}
          <BannerBtn>자세히 보기</BannerBtn>
          <ImgBtnSpace>
            <BtnSpace onClick={() => handleSwipe(-1)}>
              <LeftBtn />
            </BtnSpace>
            <ChangeSpace>
              <ChangeNumber>1</ChangeNumber>
              <ChangeNumber>
                <BsDot />
              </ChangeNumber>
              <ChangeNumber>4</ChangeNumber>
              <BtnSpace>
                <ParseBtn />
              </BtnSpace>
            </ChangeSpace>
            <BtnSpace onClick={() => handleSwipe(1)}>
              <RightBtn />
            </BtnSpace>
          </ImgBtnSpace>
        </InsideImgContents>
      </ContentsBannerImg>
    </ContentsSpace>
  );
}
const ContentsSpace = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid blue;
`;
const GrayBaground = styled.div`
  width: 100vw;
  height: 105vh;
  z-index: 2;
  background-color: #545454;
  position: absolute;
  opacity: 0.3;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 5px solid red;
  position: absolute;
  z-index: 1;
`;
const BannerImg = styled.img`
  border: 1px solid blue;
  width: 100vw;
  height: 100vh;
`;

const ContentsBannerImg = styled.div`
  width: 100vw;
  height: 106vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InsideImgContents = styled.div`
  width: 80%;
  height: 30%;
  border: 1px solid blue;
  margin-top: 50px;
  display: flex;
  font-weight: 700;
  flex-direction: column;
`;
const BannerImgContents = styled.span`
  color: white;
  font-size: 75px;
  z-index: 3;
`;
const BannerBtn = styled.div`
  cursor: pointer;
  width: 310px;
  height: 70px;
  border: 4px solid white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  margin-top: 50px;
  z-index: 3;
  &:hover {
    color: black;
    background-color: #ffe100;
  }
`;
const ImgBtnSpace = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  font-size: 30px;
  bottom: 30px;
  left: 43%;
  z-index: 3;
  margin-bottom: 50px;
`;
const BtnSpace = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  &:hover {
    border: 2px solid white;
    border-radius: 50%;
  }
`;
const LeftBtn = styled(BiChevronLeft)`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const RightBtn = styled(BiChevronRight)`
  color: white;
  font-size: 30px;
`;

const ParseBtn = styled(IoMdPause)`
  font-size: 20px;
  color: white;
`;
const StartBtn = styled(BsCaretRightFill)`
  color: white;
`;

const ChangeSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  font-size: 18px;
`;
const ChangeNumber = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export default Contents;
