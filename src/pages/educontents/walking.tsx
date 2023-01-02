import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import walkingImg from "../../images/detailContents/walking.png";
import walkingKitImg1 from "../../images/detailContents/slide/education_detail_walking/walkingImage1.png";
import walkingKitImg2 from "../../images/detailContents/slide/education_detail_walking/walkingImage2.png";
import walkingClass1 from "../../images/detailContents/slide/education_detail_walking/walkingClassImage11.png";
import walkingClass2 from "../../images/detailContents/slide/education_detail_walking/walkingClassImage12.png";
import walkingClass3 from "../../images/detailContents/slide/education_detail_walking/walkingClassImage13.png";
import walkingClass4 from "../../images/detailContents/slide/education_detail_walking/walkingClassImage14.png";
import walkingClass5 from "../../images/detailContents/slide/education_detail_walking/walkingClassImage15.png";

export const Walking: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="DIY 워킹 로봇"
        route2="/walking"
        route2Opacity={1}
        title="DIY 워킹 로봇"
        subtitle="DIY walking robot"
        content="동물처름 두발로 걷는 로봇, 스마트 워킹로봇 만들기"
        contentClass="Subtitle-smallFont"
        contentsImg={walkingImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생, 고등학생"
        contents2_1="&nbsp; • ‘스마트 워킹로봇’이라는 창의적 구조물, 창작물 제작을 통한 심미적 감성과 창의적 사고력 향상을 기대한다."
        contents2_2="&nbsp; • 일반 바퀴형 이동 수단과 직립 보행 이동 수단의 차이를 이해하고 ‘생체 모방 공학’을 통해 창의적 문제해결 능력을 배양한다."
        contents2_3="&nbsp; • 자신의 불편함을 로봇 공학적 지식을 바탕으로 스스로 해결하는 메이커 문화를 직접 체험."
        contents3_1="찾아 가는 현장교육, 체험형 교육 부스"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"
        contents1_1="1. 로봇공학 전문가 선생님을 통해 로봇공학 학문을 이해한다."
        contents1_2="2. 로봇의 구성요소(센서, 모터, 연산장치)중 센서와 모터의 개념을 살펴본다. (초, 중)"
        contents1_3="3. IR센서가 물체와의 거리를 측정하는 원리를 이해하고, 실제 로봇에 사용된 예시를 본다."
        contents1_4="4. 제작하는 로봇의 부품의 기구학 개념을 동물의 다리구조와 비교하며 이해한다."
        contents2_1="1. 회로도에 맞춰 각 전자 부품을 직접 연결하여 로봇 전자회로를 제작한다."
        contents2_2="2. 로봇 외관을 조립하고 IR센서에 따라 로봇의 이동이 달라지는 것을 확인한다."
        contents3_1="1. 일반적인 바퀴와 달리 다리를 통해 보행하는 로봇의 장점을 이해한다."
        contents3_2="2. 모터의 원형 운동을 보행 운동으로 변경한 기구학 개념을 이해한다."
        contents3_3="3. 생활 속 서비스로봇에 사용되는 IR센서와 스마트 워킹로봇의 IR센서의 공통점과 차이점을 이해한다."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="로봇의 원리와 구성을 공학적으로 이해하고, 현시점에서 개발된 다양한 로봇의 사례를 학습한다."
        contents2="DC모터, 스위치, IR센서의 활동으로, 설계, 조립, 제어 원리 이해를 통해 로봇공학적 사고력을 키운다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={walkingKitImg1}
        imgSrc2={walkingKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={walkingClass1}
        imgSrc2={walkingClass2}
        imgSrc3={walkingClass3}
        imgSrc4={walkingClass4}
        imgSrc5={walkingClass5}
      />

      <Notice
        title="공지사항"
        titleMarginTop={12.222}
        contentsText1="- DORO 교육 콘텐츠는 전공 지식을 갖춘 대학생 강사님이 진행합니다."
        contentsText2="- DORO 교육 콘텐츠는 강사님의 진로 스토리를 포함하고 있습니다."
        contentsText3="- 원활한 교육 자료 시청을 위해 스크린, 빔 프로젝트 등의 시청각 장비를 준비해주세요."
        contentsText4="- 해당 교육을 진행하기 위해선 1인 메이킹 활동이 가능한 사이즈의 책상이 필요합니다."
        contentsText5="- 코로나-19 감염병 예방 및 안전한 교육을 위해 메이킹 안전 수칙을 준수해주세요."
        contentsText6="- 문의 : 010-7633-0371"
      />
    </>
  );
};
