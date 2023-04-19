import { useState, useEffect } from "react";
import MainBannerContents from "./components/MainBannerContents";
import Menu from "./components/Menu";
import InfinityContents from "./components/InfinityContents";
import CarouseContents from "./components/CarouseContents";
import Footer from "./components/Footer";

import styled from "styled-components";

function App() {
  const [headerState, setHeaderState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, [scrollPosition]);
  return (
    <Space>
      <Menu
        scrollPosition={scrollPosition}
        headerState={headerState}
        setHeaderState={setHeaderState}
      />
      <MainBannerContents setHeaderState={setHeaderState} />
      <InfinityContents />
      <CarouseContents />
      <Footer />
    </Space>
  );
}
const Space = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: -3px 0px 0px -1px;
`;

export default App;
