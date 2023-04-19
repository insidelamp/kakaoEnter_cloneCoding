import React from "react";

function commonComponent() {
  return (
    <Contents>
      <FlexImg className="flexTitile">
        <div>보도자료</div>
        <ImgStyled className="rionImg" src={rionIcon} />
      </FlexImg>
      <div>
        제주창조경제혁신센터와 지역 기반 스타트업 대상 클라우드 AI 혁신
        <br />
        지원
      </div>
      <img src={contentsImg3} />
      <div>
        <div>스타트업지원</div>
        <div>제주창조경제혁신센터</div>
        <div>카카오i클라우드</div>
      </div>
    </Contents>
  );
}

export default commonComponent;
