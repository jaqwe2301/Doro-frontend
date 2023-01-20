import { Link, useNavigate } from "react-router-dom";
import { Banner } from "../components/banner";
import { LOCALSTORAGE_TOKEN } from "./../constants";
import "../styles/applyEdu.css";

import createEduRoute from "../images/bannerCategory/createEdu.png";

export const ApplyEdu: React.FC = () => {
  const navigate = useNavigate();

  const navigateToMakeNewApplication = () => {
    navigate("/makeNewApplication");
  };

  const navigateToShowApplication = () => {
    navigate("/showApplication");
  };

  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="커뮤니티"
        route1=""
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="교육 신청"
        route2="/applyEdu"
        route2Opacity={1}
        title="교육 신청"
        subtitle="Education Application"
        content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
        contentClass="Subtitle-smallFont"
        rightImg="none"
      />
      <div className="typeSelect-container">
        <button
          onClick={navigateToMakeNewApplication}
          className="typeSelect-button"
        >
          교육 신청하기
        </button>
        <button
          onClick={navigateToShowApplication}
          className="typeSelect-button"
        >
          교육 신청내역 확인하기
        </button>
      </div>
    </>
  );
};
