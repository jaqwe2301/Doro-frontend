import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import balancingImg from "../../images/detailContents/slide/education_detail_balancing/upperBannerImageBalancing.png";
import balancingKitImg1 from "../../images/detailContents/slide/education_detail_balancing/balancingImageFront.png";
import balancingKitImg2 from "../../images/detailContents/slide/education_detail_balancing/balancingImageSide.png";
import balancingClass1 from "../../images/detailContents/slide/education_detail_balancing/balancingClassImage1.png";
import balancingClass2 from "../../images/detailContents/slide/education_detail_balancing/balancingClassImage2.png";
import balancingClass3 from "../../images/detailContents/slide/education_detail_balancing/balancingClassImage3.png";
import balancingClass4 from "../../images/detailContents/slide/education_detail_balancing/balancingClassImage4.png";
import balancingClass5 from "../../images/detailContents/slide/education_detail_balancing/balancingClassImage5.png";

export const Balancing: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="DIY 밸런싱 로봇"
        route2="/balancing"
        route2Opacity={1}
        title="DIY 밸런싱 로봇"
        subtitle="DIY Balancing robot"
        content="서보모터와 초음파센서를 활용한 PID 제어 밸런싱 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={balancingImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1="&nbsp; • 로봇의 원리와 구성 이해를 바탕으로 공학적 분석력을 높인다."
        contents2_2="&nbsp; • 밸런싱 로봇의 설계 및 제작과 서보모터, 초음파센서, 아두이노 등을 활용한 실습을 통해 흥미를 높인다."
        contents2_3="&nbsp; • 로봇의 개념을 정확히 인지하며, 4차 산업 시대 인간이 잘하는 일, 로봇이 잘하는 일을 생각한다."
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
        contents1_1="1. 로봇의 원리와 구성, 정의를 이해하고, 다양한 종류의 로봇을 알아본다."
        contents1_2="2. 사람과 로봇의 차이를 이해하고, 각자가 잘하는 일을 구분하는 능력을 키운다."
        contents1_3="3. 로봇의 센서, 모터, 제어기(아두이노)가 사람의 어떤 부분과 유사한지 학습한다."
        contents1_4="4. 아두이노와 초음파 센서, 서보 모터로 PID 제어의 기초적인 원리를 이해한다."
        contents2_1="1. 내부 부품인 브레드 보드, 초음파 센서, 서보모터, 아두이노 등 배선 실습을 한다."
        contents2_2="2. 밸런싱 로봇 외관 조립을 통해 설계 및 제작의 원리를 이해하여, 로봇공학입문설계 과목의 기초적인 전공 경험을 키운다."
        contents3_1="1. 작동 테스트로 탁구공을 로봇 위에 올린 후 공의 위치에 따라 중심을 잡는것을 확인한다."
        contents3_2="2. 로봇의 인식, 연산, 행동을 피드백과 제어를 반복하여 균형잡는 PID 제어 원리 이해를 통해, 시스템해석 전공기초 지식을 습득한다."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="로봇의 원리와 구성을 공학적으로 이해하고, 현 시점에서 개발된 다양한 로봇의 사례를 학습한다."
        contents2="로봇공학입문설계, 시스템 해석 전공 과목의 기초 지식 바탕 메이킹 활동으로, 설계, 조립, 제어 원리 이해를 통해 로봇공학적 사고력을 키운다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={balancingKitImg1}
        imgSrc2={balancingKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={balancingClass1}
        imgSrc2={balancingClass2}
        imgSrc3={balancingClass3}
        imgSrc4={balancingClass4}
        imgSrc5={balancingClass5}
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
