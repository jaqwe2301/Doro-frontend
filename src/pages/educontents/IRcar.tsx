import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import IRcarImg from "../../images/detailContents/slide/education_detail_IRcar/upperBannerIR.png";
import IRcarKitImg1 from "../../images/detailContents/slide/education_detail_IRcar/IRImage1.png";
import IRcarKitImg2 from "../../images/detailContents/slide/education_detail_IRcar/IRImage2.png";
import IRcarClass1 from "../../images/detailContents/slide/education_detail_IRcar/IRClassImage1.png";
import IRcarClass2 from "../../images/detailContents/slide/education_detail_IRcar/IRClassImage2.png";
import IRcarClass3 from "../../images/detailContents/slide/education_detail_IRcar/IRClassImage3.png";
import IRcarClass4 from "../../images/detailContents/slide/education_detail_IRcar/IRClassImage4.png";
import IRcarClass5 from "../../images/detailContents/slide/education_detail_IRcar/IRClassImage5.png";

export const IRcar: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="DIY IR 자동차"
        route2="/IRcar"
        route2Opacity={1}
        title="DIY IR 자동차"
        subtitle="DIY IR car"
        content="IR 모바일 로봇 제작 및 Auto Following, Obstacle Recognition 구현"
        contentClass="Subtitle-smallFont"
        contentsImg={IRcarImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1="&nbsp; • ‘IR 모바일로봇’을 직접 제작하며 창의적 구조물 개발 사고력 향상을 기대한다."
        contents2_2="&nbsp; • 센서의 원리와 전자회로를 이용한 다양한 기능구현 방법을 익힌다."
        contents2_3="&nbsp; • 주어진 문제점을 로봇 공학적 지식을 바탕으로 스스로 해결하는 메이커 문화 경험을 공유한다."
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
        contents1_4="4. Auto Following, Obstacle Recognition의 적용사례를 공부한다."
        contents2_1="1. 회로도에 맞춰 각 전자 부품을 직접 연결하여 로봇 전자회로를 제작한다."
        contents2_2="2. 로봇 외관을 조립하고 회로 구성과 IR센서에 따라 로봇의 이동이 달라지는 것을 확인한다."
        contents3_1="1. Auto Following 모드를 이해하고 실습한다."
        contents3_2="2. Obstacle Recognition 모드를 이해하고 실습한다."
        contents3_3="2. 생활 속 서비스로봇에 사용되는 IR센서와 스마트 워킹로봇의 IR센서의 공통점과 차이점을 이해한다."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="Auto Following과 Obstacle Recognition을 이해하고, 다양한 로봇에 적용된 사례를 학습한다."
        contents2="DC모터, 스위치, IR센서, L293D(H-bridge)활동으로, 설계, 조립, 제어 원리 이해를 통해 로봇공학적 사고력을 키운다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={IRcarKitImg1}
        imgSrc2={IRcarKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={IRcarClass1}
        imgSrc2={IRcarClass2}
        imgSrc3={IRcarClass3}
        imgSrc4={IRcarClass4}
        imgSrc5={IRcarClass5}
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
