import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import lineTracerImg from "../../images/detailContents/slide/edu_detail_lineTracer/upperBannerTracerImage.png";
import lineTracerKitImg1 from "../../images/detailContents/slide/edu_detail_lineTracer/TracerImage.png";
import lineTracerClass1 from "../../images/detailContents/slide/edu_detail_lineTracer/IRClassImage1.png";
import lineTracerClass2 from "../../images/detailContents/slide/edu_detail_lineTracer/IRClassImage2.png";
import lineTracerClass3 from "../../images/detailContents/slide/edu_detail_lineTracer/IRClassImage3.png";
import lineTracerClass4 from "../../images/detailContents/slide/edu_detail_lineTracer/IRClassImage4.png";
import lineTracerClass5 from "../../images/detailContents/slide/edu_detail_lineTracer/IRClassImage5.png";

export const Tracer: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="라인 트레이서"
        route2="/tracer"
        route2Opacity={1}
        title="라인 트레이서"
        subtitle="Line Tracer"
        content="사물인터넷, 블루투스 통신을 이해하고, DIY 블루투스 스피커 제작하기"
        contentClass="Subtitle-smallFont"
        contentsImg={lineTracerImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1="&nbsp; • 라인트레이싱 로봇을 통해 모바일 로봇의 정의와 구성 요소, 동작 원리를 이해할 수 있다."
        contents2_2="&nbsp; • 미션을 수행하기 위한 순서도를 구상하고 이를 코드로 구현하며 문제해결 능력 및 컴퓨팅 사고력을 함양한다."
        contents2_3="&nbsp; • 함수의 입력과 출력 개념을 이해하고, 더 나아가 로봇의 입력(센서)과 출력(모터,LED 등) 개념을 이해할 수 있다."
        contents3_1="DORO 챌린지"
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
        contents1_1="1. 로봇의 구성요소(하드웨어, 모터, 센서, LED)를 학습하고 로봇의 입력과 출력 구조를 학습한다."
        contents1_2="2. 거리측정 IR센서의 원리를 학습하고, 이를 통해 흰색과 검정색을 구분하는 방법을 이해한다."
        contents1_3="3. RGB센서의 원리를 통해 사람이 색을 인식하는 원리를 이해한다."
        contents1_4="4. 라인트레이싱 모바일 로봇의 원리를 배우고 이를 위한 알고리즘을 학습한다"
        contents1_5="5. 아두이노 IDE(통합개발환경)의 개념을 학습하고 로봇 제작에 사용할 수 있음을 이해한다."

        contents2_1="1. 아두이노 IDE를 사용하여, 코드를 작성하고 이를 아두이노 보드에 업로드한다."
        contents2_2="2. 아두이노 개발 과정을 이해하고, 이를 바탕으로 센서를 사용한다."
        contents2_3="3. IR센서 값을 출력해보고, 이를 바탕으로 검정색과 흰색을 구분하는 코드를 작성한다."
        contents2_4="4. RGB센서 값을 출력해보고, 이를 바탕으로 빨강,초록,파랑을 구분하는 코드를 작성한다."
        contents2_5="5. 모터를 회전시켜 모바일 로봇을 움직이는 코드를 작성하고 방향 및 속도를 조절 해본다."
        contents2_6="6. 3색 LED 빛을 내는 코드를 작성하고, RGB센서에서 인식된 색상을 LED로 표현 하는 코드를 작성하며 함수의 입출력 개념을 학습한다."
        contents2_7="7. 미션을 수행하기 위한 순서도를 학습하고, 조건문과 함수를 사용하여 순서도를 코드로 구현한다."

        contents3_1="1. 모터가 2개인 모바일 로봇의 움직임에 대해 학습한다."
        contents3_2="2. 로봇에 사용되는 다른 센서들을 알아보고 센서 사용 목적에 대해 이해한다."
        contents3_3="3. 로봇의 입력과 출력에 대해서 학습하고, 기존의 다른 로봇들과 비교해 본다."
        contents3_4="4. 라인트레이싱을 하기 위해서 AI(강화학습)를 사용한 예시에 대해 알아보고, 차이점을 이해한다."
        contents3_5="5. 라인 없이 자율주행은 하는 로봇은 어떠한 센서를 사용하며, 어떻게 동작하는지 알아본다."

        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="아두이노 IDE를 사용한 실습을 통해 다양한 소자 사용법 및 임베디드 보드에 대한 개념과 로봇에 대한 이해도를 높인다."
        contents2="DC모터, 스위치, IR센서, RGB센서 등을 실습하고, 설계, 조립, 제어 원리 이해를 통해 로봇공학적 사고력을 키운다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={lineTracerKitImg1}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={0}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={lineTracerClass1}
        imgSrc2={lineTracerClass2}
        imgSrc3={lineTracerClass3}
        imgSrc4={lineTracerClass4}
        imgSrc5={lineTracerClass5}
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
