import { Banner } from "../components/banner";
import ApplyButton from "../components/applyButton";
import { LOCALSTORAGE_TOKEN } from "./../constants";

export const ApplyEdu: React.FC = () => {
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
      <div className="CreateEdu-content-root">
        <ApplyButton />
      </div>
    </>
  );
};
