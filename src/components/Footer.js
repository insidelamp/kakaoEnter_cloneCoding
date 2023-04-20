import React from "react";
import styled from "styled-components";
import footerImg from "../Img/global-banner-bg.jpeg";

function Footer() {
  return (
    <Wrapper>
      <FooterWrapper>
        <FooterImgSpace>
          <FooterImg />
        </FooterImgSpace>
      </FooterWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: end;
`;
const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;

const FooterImgSpace = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #eeeeee;
  margin-top: 10vh;
`;

const FooterImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-image: url(${footerImg});
`;

export default Footer;
