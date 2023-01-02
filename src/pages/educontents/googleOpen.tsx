import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import aiexampleImg from "../../images/detailContents/slide/education_detail_aiexample/upperBannerAIExample.png";
import aiexampleClass1 from "../../images/detailContents/slide/education_detail_aiexample/AIExampleClassImage1.png";
import aiexampleClass2 from "../../images/detailContents/slide/education_detail_aiexample/AIExampleClassImage2.png";
import aiexampleClass3 from "../../images/detailContents/slide/education_detail_aiexample/AIExampleClassImage3.png";
import aiexampleClass4 from "../../images/detailContents/slide/education_detail_aiexample/AIExampleClassImage4.png";
import aiexampleClass5 from "../../images/detailContents/slide/education_detail_aiexample/AIExampleClassImage5.png";

export const GoogleOpen: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="Google AI 예제 원리 이해"
        route2="/googleopen"
        route2Opacity={1}
        title="Google AI 예제 원리 이해"
        subtitle="Google AI Example Principles"
        content="Google에서 제공하는 3가지 AI 예제 실습을 통해 학습된 인공지능을 만나보며 원리 이해하기기"
        contentClass="Subtitle-smallFont"
        contentsImg={aiexampleImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생"
        contents2_1=" (인공지능 개념 확립) 인공지능 개념을 확인하고, 일상생활 속 AI를 찾아보며 흥미를 유발한다."
        contents2_2=" (인공지능 원리 이해) 인공지능이 바라보는 데이터를 이해하고, 학습 방법을 습득한다."
        contents2_3=" 미래 인공지능의 발전 방향을 고민하고, 상상하며 창의적 사고를 발달시킨다."
        contents3_1="찾아 가는 현장교육, 체험형 교육 부스"
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
        contents1_1="1. 영상과 사진을 통해 인공지능의 개념 확립하기"
        contents1_2="2. 사람의 지능과 인공지능을 비교하며 AI의 학습 과정 알아보기"
        contents1_3="3. 일상생활 속 인공지능 찾아보기"
        contents2_1="AI Gahaku"
        contents2_2="1. 검색창에서 인물 이미지를 검색하고, AI Gahaku 사이트에 업로드한 뒤 바뀌는 화풍 확인해보기"
        contents2_3="2. 웹캠으로 자신의 얼굴을 촬영하고 AI Gahaku 사이트에 업로드 한 뒤 바뀌는 화풍 관찰해보기"
        contents2_4="Google doodle bach"
        contents2_5="1. 컴퓨터 화면의 오선지에서 직접 음을 구성해보고, 인공지능에게 들려주기"
        contents2_6="2. 바흐의 음악으로 학습된 인공지능이 만들어주는 화음을 듣고 친구들에게 공유하기"
        contents2_7="Quick Draw"
        contents2_8="1. 인공지능이 제안하는 6개의 단어에 맞춰 20초 동안 그림을 그리고, AI가 정답을 맞히는지 확인하기"
        contents2_9="2. 내가 그린 그림이 학습 데이터가 되는 과정과 인공지능의 학습 원리 이해하기"
        contents3_1="1. 인공지능 체험을 통해 느낀점 친구들과 공유하기"
        contents3_2="2. 인공지능을 활용하여 만들고 싶은 아이디어 친구들과 공유하기"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="사람의 지능과 인공지능을 비교해보고, 정확한 개념과 학습 원리를 이해한다."
        contents2="구글에서 제공하는 인공지능 프로그램 실습을 통해 원리를 이해하고, 학습된 인공지능을 경험해본다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={aiexampleClass1}
        imgSrc2={aiexampleClass2}
        imgSrc3={aiexampleClass3}
        imgSrc4={aiexampleClass4}
        imgSrc5={aiexampleClass5}
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
