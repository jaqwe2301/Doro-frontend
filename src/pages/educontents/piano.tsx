import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import pianoImg from "../../images/detailContents/slide/education_detail_piano/upperBannerPiano.png";
import pianoKitImg1 from "../../images/detailContents/slide/education_detail_piano/pianoImage.png";
import pianoClass1 from "../../images/detailContents/slide/education_detail_piano/pianoClassImage1.png";
import pianoClass2 from "../../images/detailContents/slide/education_detail_piano/pianoClassImage2.png";
import pianoClass3 from "../../images/detailContents/slide/education_detail_piano/pianoClassImage3.png";
import pianoClass4 from "../../images/detailContents/slide/education_detail_piano/pianoClassImage4.png";
import pianoClass5 from "../../images/detailContents/slide/education_detail_piano/pianoClassImage5.png";

export const Piano: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="초음파 피아노"
        route2="/piano"
        route2Opacity={1}
        title="초음파 피아노"
        subtitle="Ultrasonic Sensor piano"
        content="IOT를 이해하고 기초 아두이노 코딩 실습을 통한 초음파 피아노 제작하기"
        contentClass="Subtitle-smallFont"
        contentsImg={pianoImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1="&nbsp; • 이론과 실습을 병행하여 청소년은 자기주도적 태도로 아두이노를 학습한다."
        contents2_2="&nbsp; • 기초 센서 및 전자회로 구성법을 학습하여 창작물 제작 활동 능력을 학습한다."
        contents2_3="&nbsp; • 전공 강사와의 멘토링을 통해 IT, 스마트팩토리, AI지식을 습득하며 진로 경험을 함양한다."
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
        contents1_1="1. 강사 전공 소개 및 진로 교육"
        contents1_2="2. 아두이노 원리 및 C언어 기초 개념 소개"
        contents1_3="3. 아두이노 설치하기"
        contents2_1="1. LCD 이용해서 Hello word 찍어보기 (영어, 한글)"
        contents2_2="&nbsp;&nbsp;&nbsp;  1-1. 미션 : 본인 이름 LCD에 나오게 하기"
        contents2_3="2. LED, 3색 LED 켜보기"
        contents2_4="3. 조건문을 통해 가변저항, 스위치 사용해보기"
        contents2_5="&nbsp;&nbsp;&nbsp;  3-1. 미션 : 시간에 따라 LED가 켜지는 무지개, 가변저항에 따라 LED가 켜지는 무지개 만들기"
        contents3_1="1. 배열과 caes문을 활용하여 데이터 저장하기"
        contents3_2="2. 부저 및 초음파 센서 사용하기"
        contents3_3="&nbsp;&nbsp;&nbsp; 2-1. 미션 : 피아노 완성 후 배열을 활용하여 “도~시”음계로 노래 만들기"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="아두이노를 사용하여 IOT 기본 지식을 습득하고 기초 아두이노 코딩을 배우며 센서와 모터 등 다양한 전자회로를 제어한다."
        contents2="기초 아두이노 코딩을 배우며 반복문, 조건문, 변수, 함수 등 기초 문법을 이해한다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={pianoKitImg1}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={0}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={pianoClass1}
        imgSrc2={pianoClass2}
        imgSrc3={pianoClass3}
        imgSrc4={pianoClass4}
        imgSrc5={pianoClass5}
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
