import React from "react";
import styled from "styled-components";
import footerImg from "../Img/global-banner-bg.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { RiKakaoTalkLine } from "react-icons/ri";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsPlus } from "react-icons/bs";

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <FooterImgSpace>
          <FooterImg />
          <FooterContentSpace>
            <div>카카오엔터프라이즈의 기술과</div>
            <div>서비스에 대해 문의하세요</div>
          </FooterContentSpace>
          <FooterBtnSpace href="https://kakaoenterprise.com/page/">
            <FooterBtn>문의하기</FooterBtn>
          </FooterBtnSpace>
        </FooterImgSpace>
        <FooterInformation>
          <InformationFlex className="footerMenu">
            <InformationTitle>© Kakao Enterprise Corp.</InformationTitle>
            <InformationMenu>
              <FooterFlexDiv>
                <div>회사소개</div>
                <IconSize>
                  <MdKeyboardArrowDown />
                </IconSize>
              </FooterFlexDiv>
              <FooterFlexDiv>개인정보처리방침</FooterFlexDiv>
              <FooterFlexDiv>사이버윤리실</FooterFlexDiv>
              <FooterFlexDiv>
                <div>공지사항</div>
                <IconSize>
                  <MdKeyboardArrowDown />
                </IconSize>
              </FooterFlexDiv>
              <FooterFlexDiv>고객지원</FooterFlexDiv>
              <FooterFlexDiv className="flexSite">
                <div>관련사이트</div>
                <IconSize className="puslSize">
                  <BsPlus />
                </IconSize>
              </FooterFlexDiv>
            </InformationMenu>
          </InformationFlex>
          <InformationFlex>
            <FooterIconSpace>
              <FooterIcon href="https://www.instagram.com/kakaoenterprise/">
                <FiInstagram />
              </FooterIcon>
            </FooterIconSpace>
            <FooterIconSpace>
              <FooterIcon href="https://www.facebook.com/kakaoenterprise">
                <FaFacebookF />
              </FooterIcon>
            </FooterIconSpace>
            <FooterIconSpace className="iconBlog">
              <FooterIcon href="https://tech.kakaoenterprise.com/">
                B
              </FooterIcon>
            </FooterIconSpace>
            <FooterIconSpace>
              <FooterIcon href="https://www.youtube.com/channel/UCVxXa4KKYyw3mQ3KYqze9Ng/featured">
                <AiFillYoutube />
              </FooterIcon>
            </FooterIconSpace>
            <FooterIconSpace>
              <FooterIcon href="https://pf.kakao.com/_lVmtT">
                <RiKakaoTalkLine />
              </FooterIcon>
            </FooterIconSpace>
          </InformationFlex>
        </FooterInformation>
      </FooterWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: end;
`;
const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FooterImgSpace = styled.div`
  width: 100%;
  height: 45vh;
  background-color: #eeeeee;
  margin-top: 5vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-image: url(${footerImg});
  position: absolute;
  z-index: 2;
`;
const FooterContentSpace = styled.div`
  width: 30%;
  height: 30%;
  font-weight: bolder;
  font-size: 45px;
  z-index: 3;
  & > div {
    margin-bottom: 20px;
  }
`;
const FooterBtnSpace = styled.a`
  width: 13%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: black;
  z-index: 3;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0e0e0e;
  }
`;

const FooterBtn = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: none;
`;

const FooterInformation = styled.div`
  width: 100%;
  height: 20vh;
  border: 1px solid violet;
  cursor: pointer;
`;

const InformationFlex = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  &.footerMenu {
    height: 55%;
    justify-content: space-between;
    align-items: center;
  }
`;
const InformationTitle = styled.div`
  font-weight: bolder;
`;
const InformationMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const FooterIconSpace = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  margin: 0px 10px;
  &.iconBlog {
    height: 34px;
    padding-top: 2px;
  }
`;
const FooterIcon = styled.a`
  color: white;
  font-size: 22px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bolder;
`;
const FooterFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: bolder;
  &.flexSite {
    justify-content: space-around;
    width: 180px;
    background-color: #ececec;
    border-radius: 20px;
  }
`;
const IconSize = styled.div`
  font-size: 25px;
  padding-top: 5px;
  &.puslSize {
    font-size: 30px;
  }
`;
export default Footer;
