import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import thinkerCADImg from "../../images/detailContents/slide/edu_detail_thinkercad/upperBannerTinkerCAD.png";
import thinkerCADClass1 from "../../images/detailContents/slide/edu_detail_thinkercad/thinkerCADClassImage1.png";
import thinkerCADClass2 from "../../images/detailContents/slide/edu_detail_thinkercad/thinkerCADClassImage2.png";
import thinkerCADClass3 from "../../images/detailContents/slide/edu_detail_thinkercad/thinkerCADClassImage3.png";
import thinkerCADClass4 from "../../images/detailContents/slide/edu_detail_thinkercad/thinkerCADClassImage4.png";
import thinkerCADClass5 from "../../images/detailContents/slide/edu_detail_thinkercad/thinkerCADClassImage5.png";

export const Tinkercad: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="팅커캐드 아두이노 시뮬레이션"
        route2="/googleai"
        route2Opacity={1}
        title="팅커캐드 아두이노 시뮬레이션"
        subtitle="Thinkercad Arduino simulation"
        content="아두이노와 팅커캐드를 처음 접하는 사람들도 쉽게 배울수 있는 시뮬레이션 학습"
        contentClass="Subtitle-smallFont"
        contentsImg={thinkerCADImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" &nbsp; • 아두이노를 기본적으로 사용할 수 있으며 이를 이용해 물로켓, 라인 트레이싱, 스마트 팜등 다양한 체험이 가능하다"
        contents2_2=" &nbsp; • 시뮬레이션을 사용하기 때문에 교육 후에도 아두이노와 센서들을 구입하지 않고도 자기주도 학습이 가능하다."
        contents3_1="비대면 온라인 교육, 찾아 가는 현장교육"
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
        contents1_1="1. Thinkercad와 아두이노란?"
        contents1_2="2. Thinkercad 아이디 가입 및 간단한 구조 설명"
        contents2_1="1. 아두이노 원리 및 개념 설명"
        contents2_2="2. 아두이노 문법 설명"
        contents2_3="3. 아두이노 실습 (Thinkercad 내에서 시뮬레이션 실행)"
        contents2_4="&nbsp;&nbsp;&nbsp; 3-1. LED 센서 켜기 ( 깜빡임, 시간 간격 자유롭게 )"
        contents3_1="1. 아두이노 실습 ( 중간 단계 )"
        contents3_2="&nbsp;&nbsp;&nbsp; 1-1. 가변 저항을 이용한 LED 밝기 조절"
        contents3_3="&nbsp;&nbsp;&nbsp; 1-2. 서보 모터 제어"
        contents3_4="&nbsp;&nbsp;&nbsp; 1-3. LED 및 서보 모터를 이용해 시계 제작"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="Thinkercad를 통한 가상환경 시뮬레이션을 이용하여 아두이노 및 센서를 사용가능하도록 학습한다."
        contents2="기초적인 아두이노 사용법과 센서, 모터 등의 사용법과 전자 회로와 반복문, 함수 등의 문법을 공부한다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={thinkerCADClass1}
        imgSrc2={thinkerCADClass2}
        imgSrc3={thinkerCADClass3}
        imgSrc4={thinkerCADClass4}
        imgSrc5={thinkerCADClass5}
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
