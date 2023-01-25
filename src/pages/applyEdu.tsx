import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Banner } from "../components/banner";
import { LOCALSTORAGE_TOKEN } from "./../constants";
import "../styles/applyEdu.css";

import createEduRoute from "../images/bannerCategory/createEdu.png";

export const ApplyEdu: React.FC = () => {
  const navigate = useNavigate();

  const navigateToMakeNewApplication = () => {
    setApplyClick(false)
    navigate("/makeNewApplication");
  };

  const navigateToShowApplication = () => {
    navigate("/showApplication");
  };

  const [applyClick, setApplyClick] = useState<boolean>();

  return (
    <>
      {/* 모달창 */}
      {applyClick ? (
        <div className="Create-post-kakao-modal-container">
          <div style={{height: "13.368rem"}} className="Create-post-kakao-modal">
            <p className="Create-post-kakao-modal-top">알려드립니다 !</p>
            <div style={{height: "10.278rem"}} className="Create-post-kakao-modal-bottom">
              <p className="Create-post-kakao-modal-bottom-text">
                입력해주신 정보를 기반으로 DORO 교육 매니저가 예산과 컨셉에 맞는
                최적의 교육 커리큘럼을 제안 해드릴 예정이니 편안하게
                작성해주세요 !
              </p>
              <button
                style={{fontSize: "0.7rem"}}
                className="Create-post-kakao-modal-button"
                onClick={() => {
                  navigateToMakeNewApplication();
                }}
              >
                교육 신청 하기
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
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
          onClick={() => setApplyClick(true)}
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
