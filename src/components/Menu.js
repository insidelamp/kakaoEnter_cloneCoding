import React from "react";
import styled, { keyframes } from "styled-components";
import { TbArrowUpRight } from "react-icons/tb";
import { LogoImg } from "../Img/thumb-default.jpg";

function Menu({ headerState, setHeaderState, scrollPosition }) {
  return (
    <Space headerState={headerState} scrollPosition={scrollPosition}>
      <MenuSpace>
        <MenuLogo>
          <Logo headerState={headerState} scrollPosition={scrollPosition}>
            kakao
          </Logo>
          <Logo
            className="logoBold"
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            enterprise
          </Logo>
        </MenuLogo>
        <MenuInteraction>
          <MenuContents
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            서비스
          </MenuContents>
          <MenuContents
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            기술
          </MenuContents>
          <MenuContents
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            고객사례
          </MenuContents>
          <MenuContents
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            개발자
          </MenuContents>
          <MenuContents
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            도입문의
          </MenuContents>
          <MenuContents
            headerState={headerState}
            scrollPosition={scrollPosition}
          >
            회사정보
          </MenuContents>
        </MenuInteraction>
        <MenuEmployment
          headerState={headerState}
          scrollPosition={scrollPosition}
        >
          <div>인재영입</div>
          <EmploymentArrowSpace>
            <EmploymentArrow />
          </EmploymentArrowSpace>
        </MenuEmployment>
      </MenuSpace>
    </Space>
  );
}
const Space = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 4;
  background-color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "white" : "transparent"};
  // 프롭스로 상태값 받아서 하얀색으로 변화
`;

const MenuSpace = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const MenuLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12%;
  cursor: pointer;
`;
const Logo = styled.span`
  font-size: 25px;
  font-weight: 300;
  color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "black" : "white"};
  &.logoBold {
    font-weight: bolder;
  }
`;

const MenuInteraction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  cursor: pointer;
`;

const MenuContents = styled.div`
  color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "black" : "white"};
  width: 12%;
  font-size: 22px;
  font-weight: bold;
`;

const MenuEmployment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "black" : "white"};
  width: 10%;
  cursor: pointer;
`;

const EmploymentArrowSpace = styled.div`
  background-color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  &:hover {
    background-color: yellow;
  }
`;
const moveArrow = keyframes`
    from {
      transform: translate(20px, -12px); 
    }
    to {
      transform: translate(0px, 0px);
    }
`;
const EmploymentArrow = styled(TbArrowUpRight)`
  color: gray;
  &:hover {
    color: black;
    transform: translate(20px, -12px);
    transition: 3s;
    animation-fill-mode: forwards;
    /* animation: ${moveArrow} 10s ease-in-out forwards; */
  }
`;

export default Menu;
