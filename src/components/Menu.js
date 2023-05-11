import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { TbArrowUpRight } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { LogoImg } from "../Img/thumb-default.jpg";

function Menu({ headerState, setHeaderState, scrollPosition }) {
  const [width, setWidth] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  const onHoverDisplay = () => {
    setHeaderState(true);
  };
  const offHoverDisplay = () => {
    setHeaderState(false);
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  return (
    <Space
      headerState={headerState}
      scrollPosition={scrollPosition}
      onMouseOver={onHoverDisplay}
      onMouseLeave={offHoverDisplay}
    >
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
          {width > 1400 ? (
            <div>인재영입</div>
          ) : (
            <SmallMenu>
              <IoMdMenu />
            </SmallMenu>
          )}
          <EmploymentArrowSpace>
            <EmploymentArrow />
          </EmploymentArrowSpace>
        </MenuEmployment>
      </MenuSpace>
    </Space>
  );
}
const Space = styled.div`
  width: 100vw;
  height: 10%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 4;
  background-color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "white" : "transparent"};
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
  @media screen and (max-width: 1400px) {
    width: 30%;
  }
`;
const Logo = styled.span`
  font-size: 1.1vw;
  font-weight: 300;
  color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "black" : "white"};
  &.logoBold {
    font-weight: bolder;
  }
  @media screen and (max-width: 1400px) {
    font-size: 2vw;
  }
`;

const MenuInteraction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

const MenuContents = styled.div`
  color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "black" : "white"};
  width: 12%;
  font-size: 0.9vw;
  font-weight: bold;
  text-size-adjust: auto;
`;

const MenuEmployment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9vw;
  font-weight: bold;
  color: ${(props) =>
    props.headerState || props.scrollPosition > 100 ? "black" : "white"};
  width: 200px;
  cursor: pointer;
  text-size-adjust: auto;
  @media screen and (max-width: 1400px) {
    font-size: 1.3vw;
  }
`;

const EmploymentArrowSpace = styled.div`
  background-color: #ededed;
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
  @media screen and (max-width: 1400px) {
    display: none;
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
const SmallMenu = styled.div`
  width: 50px;
  height: 50px;
  font-size: 5vw;
  @media screen and (max-width: 1400px) {
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
