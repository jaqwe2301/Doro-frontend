import React from "react";
import { Banner } from "../../components/banner";

import eduContents from "../../images/bannerCategory/eduContents.png";
import walking from "../../images/detailContents/walking.png";

export const Pen: React.FC = () => {
  return (
    <>
      <Banner
        routeName1="• 교육컨텐츠"
        route1=""
        title="DIY 워킹 로봇"
        subtitle="DIY walking robot"
        content="사물인터넷, 블루투스 통신을 이해하고, DIY 블루투스 스피커 제작하기"
        contentClass="Subtitle-smallFont"
        contentsImg={walking}
      />
    </>
  );
};
