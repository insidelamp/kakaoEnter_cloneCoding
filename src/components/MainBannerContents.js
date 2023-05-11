import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bannerImg1 from "../Img/mainImg/kakaoenterMain1.png";
import bannerImg2 from "../Img/mainImg/kakaoenterMain2.png";
import bannerImg3 from "../Img/mainImg/kakaoenterMain3.png";
import bannerImg4 from "../Img/mainImg/kakaoenterMain4.png";
import bannerImg5 from "../Img/mainImg/kakaoenterMain5.png";
import { BsCaretRightFill, BsDot, BsPlayFill } from "react-icons/bs";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { IoMdPause } from "react-icons/io";

function MainBannerContents() {
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

  function conentsDiv() {
    if (currentIndex === 0) {
      return (
        <>
          <BannerImgContents>중진공 지원 사업 참여하고</BannerImgContents>
          <br />
          <BannerImgContents>
            카카오 i 라스 70% 할인 받으세요!
          </BannerImgContents>
          <BannerBtn href="https://kakaoenterprise.com/event/%EC%A4%91%EC%A7%84%EA%B3%B5-%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%88%98%EC%B6%9C-%EA%B3%B5%EB%8F%99%EB%AC%BC%EB%A5%98%EC%82%AC%EC%97%85-%EC%B0%B8%EC%97%AC%EA%B8%B0%EC%97%85-%EB%AA%A8%EC%A7%91/">
            자세히 보기
          </BannerBtn>
        </>
      );
    } else if (currentIndex === 1) {
      return (
        <>
          <BannerImgContents>안면인식.지능형CCTV 인증 획득</BannerImgContents>
          <br />
          <BannerImgContents>"AI로 보안 강화"</BannerImgContents>
          <BannerBtn href="https://kakaoenterprise.com/press/%ec%95%88%eb%a9%b4%ec%9d%b8%ec%8b%9d%e2%ac%9d%ec%a7%80%eb%8a%a5%ed%98%95cctv-%ec%9d%b8%ec%a6%9d-%ed%9a%8d%eb%93%9dai%eb%a1%9c-%eb%b3%b4%ec%95%88-%ea%b0%95%ed%99%94/">
            자세히 보기
          </BannerBtn>
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
          <BannerBtn href="https://kakaoilaas.com/">자세히 보기</BannerBtn>
        </>
      );
    } else if (currentIndex === 3) {
      return (
        <>
          <BannerImgContents>KAKAO ENTERPRISE</BannerImgContents>
          <br />
          <BannerImgContents>AI REPORT 발간</BannerImgContents>
          <BannerBtn href="https://kakaoenterprise.com/wp-content/uploads/2022/12/KEP_AI-REPORT_eBook.pdf">
            자세히 보기
          </BannerBtn>
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
          <BannerBtn href="https://tech.kakaoenterprise.com/172">
            자세히 보기
          </BannerBtn>
        </>
      );
    }
  }
  const handlePalse = () => {
    setPalseState(!palseState);
  };

  useEffect(() => {
    if (palseState === false) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === bannerImgArr.length - 1) {
          setCurrentIndex(0);
        }
      }, 3000);
    }
  }, [currentIndex, palseState]);
  return (
    <Content>
      <GrayBaground />
      <ContentsSpace>
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
            <ImgBtnSpace>
              <BtnSpace className="bothBtn" onClick={() => handleSwipe(-1)}>
                <LeftBtn />
              </BtnSpace>
              <ChangeSpace>
                <ChangeNumber>{currentIndex + 1}</ChangeNumber>
                <ChangeNumber>
                  <BsDot />
                </ChangeNumber>
                <ChangeNumber>{bannerImgArr.length}</ChangeNumber>
                <BtnSpace>
                  {palseState ? (
                    <StartBtn onClick={handlePalse} />
                  ) : (
                    <ParseBtn onClick={handlePalse} />
                  )}
                </BtnSpace>
              </ChangeSpace>
              <BtnSpace className="bothBtn" onClick={() => handleSwipe(1)}>
                <RightBtn />
              </BtnSpace>
            </ImgBtnSpace>
          </InsideImgContents>
        </ContentsBannerImg>
      </ContentsSpace>
    </Content>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentsSpace = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1400px) {
    width: 100vw;
    height: auto;
  }
  @media screen and (max-width: 540px) {
    width: 100vw;
  }
`;
const GrayBaground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #545454;
  position: absolute;
  opacity: 0.3;
  background-size: cover;
  display: none;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1;
  background-size: 100%;
`;
const BannerImg = styled.img`
  width: 100vw;
  height: 100vh;
  background-size: contain;

  @media screen and (max-width: 1400px) {
    width: 100vw;
    height: auto;
    min-height: 50vh;
  }
  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 50vh;
  }
`;

const ContentsBannerImg = styled.div`
  width: 100vw;
  height: 106vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 20;
  @media screen and (max-width: 1400px) {
    width: 100vw;
    height: auto;
    max-height: 50%;
    padding-top: 200px;
  }
`;
const InsideImgContents = styled.div`
  width: 80%;
  height: 60%;
  margin-top: 70px;
  display: flex;
  font-weight: 700;
  flex-direction: column;
  position: relative;
  z-index: 50;
  margin-bottom: 30px;
`;
const BannerImgContents = styled.span`
  color: white;
  font-size: 3vw;
  z-index: 3;
`;
const BannerBtn = styled.a`
  cursor: pointer;
  width: 15%;
  height: 70px;
  border: 4px solid white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.9vw;
  margin-top: 50px;
  z-index: 3;
  text-decoration: none;
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
  bottom: 0px;
  left: 43%;
  z-index: 3;
  margin-bottom: 50px;

  @media screen and (max-width: 1400px) {
    bottom: -70px;
  }
`;
const BtnSpace = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  &.bothBtn:hover {
    border: 2px solid white;
    border-radius: 50%;
  }
`;
const LeftBtn = styled(BiChevronLeft)`
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

const RightBtn = styled(BiChevronRight)`
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const PlayBtn = styled(BsPlayFill)`
  font-size: 20px;
  color: white;
`;
const ParseBtn = styled(IoMdPause)`
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
const StartBtn = styled(BsCaretRightFill)`
  color: white;
  cursor: pointer;
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
export default MainBannerContents;
