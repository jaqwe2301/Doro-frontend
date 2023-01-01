import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";


import gameConsoleImg from "../../images/detailContents/slide/Education_detail_gameConsole/upperBannerGameConsole.png";
import gameConsoleKitImg1 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleImage1.png";
import gameConsoleKitImg2 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleImage2.png";
import gameConsoleClass1 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleClassImage1.png";
import gameConsoleClass2 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleClassImage2.png";
import gameConsoleClass3 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleClassImage3.png";
import gameConsoleClass4 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleClassImage4.png";
import gameConsoleClass5 from "../../images/detailContents/slide/Education_detail_gameConsole/gameConsoleClassImage5.png";

export const GameConsole: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}

        routeDot2="•"
        routeName2="DIY 아두이노 게임기"
        route2="/gameConsole"
        route2Opacity={1}

        title="DIY 아두이노 게임기"
        subtitle="DIY Arduino game console"
        content="프로그래머와 함께하는 ‘아두이노’를 이용한 러닝 점프 게임기 제작"
        contentClass="Subtitle-smallFont"
        contentsImg={gameConsoleImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생, 고등학생"
        contents2_1="&nbsp; • 아두이노 게임기를 제작하면서 기초 코딩 개념과 알고리즘을 이해한다."
        contents2_2="&nbsp; • 아두이노와 브레드 보드, LCD를 배선해 연결하면서 기초 전자 회로 개념을 습득한다."
        contents2_3="&nbsp; • LCD 화면에 출력되는 비트맵 이미지를 이용해 게임을 만드는 프로그래밍을 이해한다."
        contents3_1="찾아 가는 현장교육, 체험형 교육 부스"
        liClass1="EduTable-table-subContents"
        
        liClass2="EduTable-table-subContents"
        liClass2_1="List-style-dics"
        liClass2_2="List-style-dics"
        liClass2_3="List-style-dics"
        liClass2_4="List-style-dics"
        liClass2_5="List-style-none"
        liClass2_6="List-style-none"
        liClass2_7="List-style-none"
        liClass2_8="List-style-none"
        liClass2_9="List-style-none"

        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"

        contents1_1="1. 로봇공학과 대학생의 전공, 로봇공학입문설계 수업에서 다룬 임베디드보드(아두이노)의 원리를 간단히 살펴보고 이해한다."
        contents1_2="2. 프로그래머의 핵심 활동인 코딩의 예시를 보며, 수업에 사용되는 코딩 개념을 학습한다."
        contents1_3="3. 프로그램 결과를 출력하는 하드웨어(LCD, 브레드 보드, 전자회로)의 원리를 이해한다."

        contents2_1="1. 브레드 보드, LCD, 아두이노, 스위치를 점퍼선을 이용해 연결한다."
        contents2_2="2. 외부 전원을 입력하고 LCD가 정상작동 하는지 확인한다."

        contents3_1="1. 간단한 비트맵 이미지를 이용해 게임을 만드는 과정을 습득한다."
        contents3_2="2. 아두이노와 LCD를 이용해 구현할 수 있는 게임 아이디어를 함께 공유한다."

        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="오픈소스 임베디드보드(플랫폼) 아두이노를 이용해 게임 프로그램을 제작한다."
        contents2="이미지를 이용한 게임을 LCD판을 이용해서 구현하여, 과학 및 공학적 관심도를 높인다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={gameConsoleKitImg1}
        imgSrc2={gameConsoleKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={gameConsoleClass1}
        imgSrc2={gameConsoleClass2}
        imgSrc3={gameConsoleClass3}
        imgSrc4={gameConsoleClass4}
        imgSrc5={gameConsoleClass5}
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
