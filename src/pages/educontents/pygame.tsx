import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import pyGameImg from "../../images/detailContents/slide/edu_detail_pygame/upperBannerPyGame.png";
import pyGameClass1 from "../../images/detailContents/slide/edu_detail_pygame/pyGameClassImage1.png";
import pyGameClass2 from "../../images/detailContents/slide/edu_detail_pygame/pyGameClassImage2.png";
import pyGameClass3 from "../../images/detailContents/slide/edu_detail_pygame/pyGameClassImage3.png";
import pyGameClass4 from "../../images/detailContents/slide/edu_detail_pygame/pyGameClassImage4.png";
import pyGameClass5 from "../../images/detailContents/slide/edu_detail_pygame/pyGameClassImage5.png";

export const Pygame: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="파이게임 모듈 활용 파이썬 교육"
        route2="/googleai"
        route2Opacity={1}
        title="파이게임 모듈 활용 파이썬 교육"
        subtitle="Python training using pygame module"
        content="코드의 기본 동작원리와 예시를 학습하고 제시된 게임 코드에서 빈칸을 채우며 파이썬 학습"
        contentClass="Subtitle-smallFont"
        contentsImg={pyGameImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" • 간단한 코딩 교육을 통해 자신만의 게임을 제작함으로서 성취감 고취"
        contents2_2=" • 모든 코딩 언어의 기초 문법인 변수, 반복, 객체 등의 개념을 다루며 코딩 기초 역량 습득"
        contents2_3=" • 빈칸을 채우는 방식의 미션을 통해 코드의 흐름과 인과관계를 파악, 논리적 사고력 향상"
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
        contents1_1="1. 강사 및 학과 전공 소개"
        contents1_2="2. 코딩 학습의 필요성 전달, 학생 개인 진로 상담"
        contents1_3="3. 파이썬 및 파이게임 모듈 설치"
        contents2_1="1. 코딩 기초 문법인 변수 선언, 반복문, 모듈과 객체 개념 학습"
        contents2_2="2. 벽돌, 공 등의 게임 객체 생성"
        contents3_1="1. (공 움직이기) 공의 이동 및 벽 튕기기 구현"
        contents3_2="2. (바(bar) 조종하기) 키보드를 이용해 바를 조종, 공이 튕기는 기능 구현"
        contents3_3="3. (벽돌 깨기) 공에 벽돌이 충돌하면 깨지는 기능 구현"
        contents3_4="4. (인공지능 맛보기) 강화학습이 적용된 ATARI breakout 게임 예시 학습, 학생과 인공지능 게임 점수 대결"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="파이썬을 활용해 벽돌 깨기 게임을 제작하면서 변수 선언, 반복문, 모듈과 객체 등 파이썬 기초 문법 습"
        contents2="공 움직이기, 벽돌 깨기 등 게임의 동작 수행 알고리즘을 익히면서 논리적 사고 함양"
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={pyGameClass1}
        imgSrc2={pyGameClass2}
        imgSrc3={pyGameClass3}
        imgSrc4={pyGameClass4}
        imgSrc5={pyGameClass5}
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
