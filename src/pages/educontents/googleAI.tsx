import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";


import teachableImg from "../../images/detailContents/slide/Education_detail_teachable/upperBannerTeachable.png";
// import teachableClass1 from "../../images/detailContents/slide/Education_detail_teachable/teachableClassImage1.png";
import teachableClass2 from "../../images/detailContents/slide/Education_detail_teachable/teachableClassImage2.png";
import teachableClass3 from "../../images/detailContents/slide/Education_detail_teachable/teachableClassImage3.png";
import teachableClass4 from "../../images/detailContents/slide/Education_detail_teachable/teachableClassImage4.png";
import teachableClass5 from "../../images/detailContents/slide/Education_detail_teachable/teachableClassImage5.png";

export const GoogleAI: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}

        routeDot2="•"
        routeName2="Google 티쳐블 머신"
        route2="/googleai"
        route2Opacity={1}

        title="Google 티쳐블 머신"
        subtitle="Google teachable machine"
        content="구글 제공 AI 교육 프로그램인 티쳐블 머신을 활용하여 아이디어 구현하기"
        contentClass="Subtitle-smallFont"
        contentsImg={teachableImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" 아두이노와 인공지능의 원리와 개념을 학습한다."
        contents2_2=" 아두이노와 인공지능을 접목하여 활용해봄으로써 인공지능을 직접 만들어본다."
        contents2_3=" 대학생 전공 강사와의 멘토링을 통해 인공지능, 프로그래밍지식을 학습하며 진로경험을 함양한다."
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

        contents1_1="1. 강사 전공소개 및 진로교육"
        contents1_2="2. 프로그래밍의 개념과 아두이노 소개"
        contents1_3="3. 아두이노 설치 및 간단한 LED 제어해보기"

        contents2_1="1. 아두이노로 스피커, 모터 등등 다양한 모듈 제어해보기"
        contents2_2="2. 인공지능의 원리와 개념 소개"
        contents2_3="3. Google 티쳐블 머신 소개"

        contents3_1="1. 인공지능의 현재 활용 예시와 각 자의 아이디어 구상해보기"
        contents3_2="2. 구상한 아이디어로 직접 인공지능 만들어보기"

        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="4차산업 기술인 사물인터넷(IoT)을 이해하고, 통신 기술과 사물인터넷이 실생활에 적용된 사례를 학습한다."
        contents2="전자 공학, 어드벤처 디자인 전공 과목의 기초 지식 바탕 메이킹 활동으로, 새로운 아이디어를 제시할 수 있는 융합적인 사고력을 키운다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        // imgSrc1={teachableClass1}
        imgSrc2={teachableClass2}
        imgSrc3={teachableClass3}
        imgSrc4={teachableClass4}
        imgSrc5={teachableClass5}
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
