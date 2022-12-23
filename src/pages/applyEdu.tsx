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
        wid={10.278}
        route={createEduRoute}
        contentClass="Subtitle-bigFont"
        title="교육 신청"
        subtitle="Education Application"
        content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
        rightImg="none"
      />
        <div className="typeSelect-container">
            <button onClick={navigateToMakeNewApplication} className="typeSelect-button">
                교육 신청하기
            </button>
            <button onClick={navigateToShowApplication} className="typeSelect-button">
                교육 신청내역 확인하기
            </button>          
        </div>

    </>
  );
};