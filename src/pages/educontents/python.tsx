import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import pythonBrainImg from "../../images/detailContents/slide/education_detail_pythonbrain/upperBannerPythonBrain.png";
import pythonBrainClass1 from "../../images/detailContents/slide/education_detail_pythonbrain/pythonBrainClassImage1.png";
import pythonBrainClass2 from "../../images/detailContents/slide/education_detail_pythonbrain/pythonBrainClassImage2.png";
import pythonBrainClass3 from "../../images/detailContents/slide/education_detail_pythonbrain/pythonBrainClassImage3.png";
import pythonBrainClass4 from "../../images/detailContents/slide/education_detail_pythonbrain/pythonBrainClassImage4.png";
import pythonBrainClass5 from "../../images/detailContents/slide/education_detail_pythonbrain/pythonBrainClassImage5.png";

export const Python: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="파이썬 활용 두뇌 게임 & 도형 제작"
        route2="/python"
        route2Opacity={1}
        title="파이썬 활용 두뇌 게임 & 도형 제작"
        subtitle="Brain Game & Shape Production Using Python"
        content="파이썬 모듈을 활용하여 두뇌 게임과 여러가지 도형 제작하기"
        contentClass="Subtitle-smallFont"
        contentsImg={pythonBrainImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" 프로그래밍 언어의 기본 개념과 원리를 이해할 수 있다."
        contents2_2=" 게임 제작을 통해 청소년이 자기주도적으로 파이썬을 학습하며 흥미를 가질 수 있다."
        contents2_3=" 간단한 게임 제작을 통해 프로그래밍 언어의 메커니즘을 이해합니다."
        contents3_1="비대면 온라인 교육, 찾아 가는 현장교육"
        liClass1="EduTable-table-subContents"
        liClass2_1="EduTable-table-subContents List-style-dics"
        liClass2_2="EduTable-table-subContents List-style-dics"
        liClass2_3="EduTable-table-subContents List-style-dics"
        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"
        contents1_1="1. 강사 전공 소개 및 진로 교육"
        contents1_2="2. 파이썬 원리 및 기초 개념 소개"
        contents1_3="3. 파이썬 설치하기"
        contents2_1="1. 파이썬에서 Hello World 출력해보기 (영어, 한글)"
        contents2_2="&nbsp;&nbsp;&nbsp; 1-1. 본인 이름 출력하"
        contents2_3="2. 터틀 모듈 사용해서 사각형 그려보기"
        contents2_4="&nbsp;&nbsp;&nbsp; 2-1. 삼각형 출력"
        contents2_5="&nbsp;&nbsp;&nbsp; 2-2. 다각형 출력"
        contents3_1="1. 반복문, 변수 선언, 자료형등 파이썬 기본 문법 설명"
        contents3_2="&nbsp;&nbsp;&nbsp; 1-1. 게임에 넣을 질문 입력 후 출력기"
        contents3_3="&nbsp;&nbsp;&nbsp; 1-2. 반복문을 이용해 1부터 40까지 숫자 출력"
        contents3_4="2. 파이썬 조건문 문법 및 사용법 설명"
        contents3_5="&nbsp;&nbsp;&nbsp; 2-1. 배운 문법을 활용하여 <숫자 8 찾기 게임> 제작"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="파이썬 기초 문법인 반복문, 조건문, 변수, 함수를 이해하고 두뇌 게임 제작을 통해 직접 실습합니다"
        contents2="파이썬 터틀 그래픽 모듈 활용법을 익히고 코딩을 통해 여러가지 도형을 제작합니다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={pythonBrainClass1}
        imgSrc2={pythonBrainClass2}
        imgSrc3={pythonBrainClass3}
        imgSrc4={pythonBrainClass4}
        imgSrc5={pythonBrainClass5}
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
