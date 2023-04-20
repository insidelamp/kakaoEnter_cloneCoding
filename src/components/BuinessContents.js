import React from "react";
import styled from "styled-components";
import { TbArrowUpRight } from "react-icons/tb";

function BuinessContents() {
  const buinessArr = [
    {
      title: "회사소개",
      content1: "카카오엔터프라이즈는",
      content2: "비즈니스와 일상에 기술을 더하여",
      content3: "디지털 혁신을 만들어갑니다",
      shortcuts: "회사소개 바로가기",
    },
    {
      title: "개발자",
      content1: "카카오엔터프라이즈는",
      content2: "개발자들과 함께 성장하는 기술",
      content3: "기업입니다.",
      shortcuts: "개발자 바로가기",
    },
    {
      title: "인재영입",
      content1: "국내 최고의 개발자,기획자,",
      content2: "디자이너 그리고 비즈니스 전문가가 모여",
      content3: "새로운 길을 만들어갑니다.",
      shortcuts: "인재영입 바로가기",
    },
  ];
  return (
    <Wrapper>
      <BuinessWrappe>
        <BuinessTitle>혁신적인 비즈니스</BuinessTitle>
        <FlexComponents>
          {buinessArr.map((ele) => (
            <FlexComponentsColumn>
              <ContentsTitle>{ele.title}</ContentsTitle>
              <ContentsDetail>{ele.content1}</ContentsDetail>
              <ContentsDetail>{ele.content2}</ContentsDetail>
              <ContentsDetail>{ele.content3}</ContentsDetail>
              <BtnSpace>
                <BtnContents>{ele.shortcuts}</BtnContents>
                <Btn>
                  <BtnArrow />
                </Btn>
              </BtnSpace>
            </FlexComponentsColumn>
          ))}
        </FlexComponents>
      </BuinessWrappe>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BuinessWrappe = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const BuinessTitle = styled.div`
  font-weight: bolder;
  font-size: 65px;
`;
const FlexComponents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FlexComponentsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsTitle = styled.div`
  color: #ffb500;
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0px;
`;

const ContentsDetail = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 5px 0px;
`;
const BtnSpace = styled.div`
  display: flex;
  align-items: center;
`;

const BtnContents = styled.div`
  font-size: 20px;
  color: gray;
  margin: 40px 0px;
`;

const Btn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ebebeb;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnArrow = styled(TbArrowUpRight)`
  font-size: 20px;
`;

export default BuinessContents;
