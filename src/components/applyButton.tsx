import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyButton = () => {
  const navigate = useNavigate();

  const navigateToMakeNewApplication = () => {
    setApplyClick(false);
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
          <div
            style={{ height: "13.368rem" }}
            className="Create-post-kakao-modal"
          >
            <p className="Create-post-kakao-modal-top">알려드립니다 !</p>
            <div
              style={{ height: "10.278rem" }}
              className="Create-post-kakao-modal-bottom"
            >
              <p
                className="Create-post-kakao-modal-bottom-text"
                style={{textAlign: "center"}}
              >
                DORO 교육 매니저가 예산과 컨셉에 맞는 최적의 교육 커리큘럼을
                제안 해드릴 예정이니 편안하게 작성해주세요 !
              </p>
              <button
                style={{ fontSize: "0.7rem" }}
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
          신청 내역 확인하기
        </button>
      </div>
    </>
  );
};

export default ApplyButton;
