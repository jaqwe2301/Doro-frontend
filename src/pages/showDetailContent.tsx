import { Link } from "react-router-dom";
import { Banner } from "../components/banner";
import EduDetailContents from "../components/EduDetailContents";
import { LOCALSTORAGE_TOKEN } from "./../constants";

import "../styles/eduContentStyles.css";



export const ShowDetailContent: React.FC = () => {
  return (
    <>
      <Banner
        routeName1="교육 콘텐츠"
        routeDot1="•"
        route1="/showDetailContent"
        route1Opacity={1}
        title="교육 콘텐츠"
        subtitle="Education Contents"
        content="청소년들에게 4차 산업혁명 핵심기술의 경험을 전달하고 시야를 넓혀주기 위한 DORO의 교육 콘텐츠를 소개합니다."
        contentBottom="DORO의 모든 교육 콘텐츠는 전공 지식을 갖춘 대학생 강사님이 진행하고 강사님의 진로 스토리를 포함 하고 있습니다."
        contentClass="Subtitle-smallFont"
        rightImg="none"
      />

      <EduDetailContents />
    </>
  );
};
