import React, { useState, useRef, useEffect } from "react";
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
  return (
    <ContentsSpace>
      <GrayBaground />
      <MainImg src={bannerImg1} />
      <ContentsBannerImg>
        <InsideImgContents>
          <BannerImgContents>중진공 지원 사업 참여하고</BannerImgContents>
          <br />
          <BannerImgContents>
            카카오 i 라스 70% 할인 받으세요!
          </BannerImgContents>
          <BannerBtn>자세히 보기</BannerBtn>
          <ImgBtnSpace>
            <BtnSpace>
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
            <BtnSpace>
              <RightBtn />
            </BtnSpace>
          </ImgBtnSpace>
        </InsideImgContents>
      </ContentsBannerImg>
    </ContentsSpace>
  );
}
const ContentsSpace = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
`;
const GrayBaground = styled.div`
  width: 100%;
  height: 105vh;
  z-index: 2;
  background-color: #545454;
  position: absolute;
  opacity: 0.3;
`;
const MainImg = styled.img`
  width: 100vw;
  height: 105vh;
  background-size: cover;
  z-index: 1;
  position: absolute;
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
