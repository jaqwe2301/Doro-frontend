import { Link } from "react-router-dom";
import { Banner } from "../components/banner";
import DetailContents from "../components/EduDetailContents";
import { LOCALSTORAGE_TOKEN } from "./../constants";

import "../styles/eduContentStyles.css";

import eduContents from "../images/bannerCategory/eduContents.png";

export const ShowDetailContent: React.FC = () => {
  return (
    <>
      <Banner
        route={eduContents}
        title="교육 콘텐츠"
        subtitle="Education Contents"
        content="청소년들에게 4차 산업혁명 핵심기술의 경험을 전달하고 시야를 넓혀주기 위한 DORO의 교육 콘텐츠를 소개합니다."
        contentBottom="DORO의 모든 교육 콘텐츠는 전공 지식을 갖춘 대학생 강사님이 진행하고 강사님의 진로 스토리를 포함 하고 있습니다."
        contentClass="Subtitle-smallFont"
        wid={6.111}
        rightImg="none"
      />

      <DetailContents />
    </>
  );
};
