import { useState, useEffect } from "react";
import Contents from "./components/Contents";
import Menu from "./components/Menu";
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
      <Contents setHeaderState={setHeaderState} />
      <Footer />
    </Space>
  );
}
const Space = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin: -3px 0px 0px -1px;
`;

export default App;
