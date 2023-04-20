import React from "react";

import styled from "styled-components";

import customerBackImg from "../Img/고객사례 배너.png";
function CustomerContents() {
  return (
    <Wrapper>
      <ImgWrappe>
        <CustomeImg src={customerBackImg} />
        <CustomeContentsSpace>
          <CutomeContents>
            <div>카카오엔터프라이즈는</div>
            <div>고객,파트너와 함께 성장하고 있습니다</div>
          </CutomeContents>
          <CustomeBtnSpace>
            <CutomeBtn>고객사례 보기</CutomeBtn>
          </CustomeBtnSpace>
        </CustomeContentsSpace>
      </ImgWrappe>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgWrappe = styled.div`
  width: 90%;
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CustomeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 1;
  position: absolute;
`;

const CustomeContentsSpace = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;
const CutomeContents = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bolder;
`;
const CustomeBtnSpace = styled.div`
  width: 18%;
  height: 13%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  &:hover {
    background-color: #ffe100;
    cursor: pointer;
  }
`;
const CutomeBtn = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: black;
`;
export default CustomerContents;
