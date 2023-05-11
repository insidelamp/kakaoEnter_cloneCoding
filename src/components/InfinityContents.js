import React from "react";
import styled from "styled-components";
import contentsImg1_1 from "../Img/contentImg/contentsImg1-1.svg";
import contentsImg1_2 from "../Img/contentImg/contentsImg1-2.svg";
import contentsImg1_3 from "../Img/contentImg/contentsImg1-3.svg";
import contentsImg1_4 from "../Img/contentImg/contentsImg1-4.svg";
import contentsImg2 from "../Img/contentImg/contentsImg2.jpeg";
import contentsImg3 from "../Img/contentImg/contentsImg3.jpeg";
import contentsImg5 from "../Img/contentImg/contentsImg5.png";
import contentsImg6 from "../Img/contentImg/contentsImg6.jpeg";
import contentsImg7 from "../Img/contentImg/contentsImg7.jpg";
import contentsImg8 from "../Img/contentImg/contentsImg8.png";
import contentsImg9 from "../Img/contentImg/contentsImg9.png";
import contentsImg10 from "../Img/contentImg/contentsImg10.png";
import rionIcon from "../Img/contentImg/icon-rion.png";

function InfinityContents() {
  const leftContentsArr = [
    {
      menu: "새소식",
      title: "최동진 CAIO 인터뷰: 초거대 AI시대에 기업 경쟁력을 확보하는 방법",
      src: contentsImg2,
      contents: ["#고성능컴퓨팅", "#챗GPT", "#초거대AI", "#카카오i엔진"],
      iconImg: rionIcon,
    },

    {
      menu: "새소식",
      title:
        "[성과]카카오 i 라스,중진공 온라인수출 공동물류사업 공급 서비스로 선정",
      src: contentsImg5,
      contents: ["#디지털물류", "#디지털전환", "#중진공", "#카카오i라스"],
      iconImg: undefined,
    },

    {
      menu: "보도자료",
      title: "SaaS형 카카오 i 커넥트 센터로 AICC 도입 `시간.비용 절갑`",
      src: contentsImg6,
      contents: ["#카카오i커넥트센터"],
      iconImg: undefined,
    },

    {
      menu: "새소식",
      title: "경상북도와 디지털 경북 구현을 위한 업무 협약 체결",
      src: contentsImg7,
      contents: [
        "#AI",
        "#공공메신져",
        "#스마트시티",
        "#지역사회문제해결",
        "#클라우드",
      ],
      iconImg: undefined,
    },
  ];
  const rightContentsArr = [
    {
      menu: "보도자료",
      title:
        "제주창조경제혁신센터와 지역 기반 스타트업 대상 클라우드 AI 혁신 지원",
      src: contentsImg3,
      contents: ["#스타트업지원", "#제주창조경제혁신센터", "#카카오i클라우드"],
      iconImg: rionIcon,
    },
    {
      menu: "마케팅 행사",
      title: "카카오 i 라스 중진공 온라인수출 공동물류사업 참여기업 모집",
      src: contentsImg5,
      contents: undefined,
      iconImg: undefined,
    },
    {
      menu: "새소식",
      title: "세계 최고 권위의 컴퓨터비전 학회`CVPR`에서 논문 발표",
      src: contentsImg6,
      contents: undefined,
      iconImg: undefined,
    },
    {
      menu: "새소식",
      title: "블록체인 플랫폼으로 `토큰 증권 시대` 기술 선도하다",
      src: contentsImg6,
      contents: [
        "#STO",
        "#디지털화폐",
        "#분산원장",
        "#블록체인",
        "#토큰증권",
        "#한국투자ST프렌즈",
        "#한국투자증권",
      ],
      iconImg: undefined,
    },
    {
      menu: "새소식",
      title: "카카오엔터프라이즈,국회도서관 AI 세미나 진행",
      src: contentsImg8,
      contents: ["#ChatGPT", "#머신러닝", "#세미나", "#인공지능(AI)"],
      iconImg: undefined,
    },
  ];
  return (
    <Wrapper>
      <ContentsWrappper>
        <LeftContents>
          <Contents className="firstContent">
            <ImgStyled src={contentsImg1_1} />
            <ImgStyled className="twoImg" src={contentsImg1_2} />
            <FlexImg>
              <ImgStyled src={contentsImg1_3} />
              <ImgStyled className="clashImg" src={contentsImg1_4} />
            </FlexImg>
          </Contents>
          {leftContentsArr?.map((leftItem, idx) => (
            <Contents key={idx}>
              <FlexImg className="flexTitile">
                <div>{leftItem.menu}</div>
                <ImgStyled
                  iconImg={leftItem.iconImg}
                  className="rionImg"
                  src={leftItem?.iconImg}
                />
              </FlexImg>
              <ContentsTitle>
                <ContentsHover>{leftItem.title}</ContentsHover>
              </ContentsTitle>
              <CotentsImg src={leftItem.src} />
              <TagGrid>
                {leftItem.contents.map((items, idx) => (
                  <TagDiv key={idx}>{items}</TagDiv>
                ))}
              </TagGrid>
            </Contents>
          ))}
        </LeftContents>
        <RightContents>
          {rightContentsArr?.map((rightItem, idx) => (
            <Contents key={idx}>
              <FlexImg className="flexTitile">
                <div>{rightItem.menu}</div>
                <ImgStyled
                  iconImg={rightItem.iconImg}
                  className="rionImg"
                  src={rightItem.iconImg}
                />
              </FlexImg>
              <ContentsTitle>
                <ContentsHover>{rightItem.title}</ContentsHover>
              </ContentsTitle>
              <CotentsImg src={rightItem.src} />
              <TagGrid>
                {rightItem.contents?.map((rightItems, idx) => (
                  <TagDiv key={idx}>{rightItems}</TagDiv>
                ))}
              </TagGrid>
            </Contents>
          ))}
        </RightContents>
      </ContentsWrappper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const ContentsWrappper = styled.div`
  width: 80%;
  height: 70%;
  margin: auto;
  display: flex;
`;

const Contents = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 50px;
  margin: 50px auto;
  &.firstContent {
    border-bottom: 1px solid white;
  }
`;
const ImgStyled = styled.img`
  width: 35%;
  height: 130px;
  display: ${(iconImg) => (iconImg.src !== undefined ? "block" : "none")};

  &.twoImg {
    width: 25%;
  }
  &.clashImg {
    width: 20%;
    margin-bottom: 0px;
  }
  &.rionImg {
    width: 40px;
    height: 40px;
  }
`;
const FlexImg = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 130px;
  &.flexTitile {
    height: 60px;
  }
`;
const CotentsImg = styled.img`
  border-radius: 30px;
  width: 100%;
  height: 35vh;
`;
const LeftContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;
const RightContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;
const ContentsTitle = styled.div`
  height: 60px;
  font-size: 25px;
  font-weight: bolder;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
`;
const ContentsHover = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  margin-bottom: 20px;
  &:hover {
    border-bottom: 1px solid gray;
  }
`;
const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 5px;
  margin-top: 30px;
`;
const TagDiv = styled.div`
  background-color: #dfdfdf;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export default InfinityContents;
