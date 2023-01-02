import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import penImg from "../../images/detailContents/slide/edu_detail_pen/upperBannerPen.png";
import penKitImg1 from "../../images/detailContents/slide/edu_detail_pen/penImage.png";
import penClass1 from "../../images/detailContents/slide/edu_detail_pen/penClassImage1.png";
import penClass2 from "../../images/detailContents/slide/edu_detail_pen/penClassImage2.png";
import penClass3 from "../../images/detailContents/slide/edu_detail_pen/penClassImage3.png";
import penClass4 from "../../images/detailContents/slide/edu_detail_pen/penClassImage4.png";
import penClass5 from "../../images/detailContents/slide/edu_detail_pen/penClassImage5.png";

export const Pen: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="3D 펜 교육"
        route2="/pen"
        route2Opacity={1}
        title="3D 펜 교육"
        subtitle="3D Pen education"
        content="3D펜에 대한 이해와 나만의 창의적인 작품 만들기"
        contentClass="Subtitle-smallFont"
        contentsImg={penImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생"
        contents2_1="&nbsp; •  3D펜의 다양한 기능을 이용하여 작품을 만들면서, 제작 상황마다 적절한 기능을 사용하면서 문제해결능력을 기를 수 있다."
        contents2_2="&nbsp; •  필라멘트 종류에 따른 성분이해를 통해 재료의 다양성을 알고 재료에 대한 이해도를 높일 수 있다."
        contents2_3="&nbsp; •  창의적인 3D 모형 제작을 통해 사물의 구조적인 이해와 심미성, 창의성을 높일 수 있다."
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
        contents1_1="1. 3D펜의 개발 목적을 알고 3D펜이 활용될 수 있는 분야와 활용 예시를 본다."
        contents1_2="2. 사용되는 필라멘트에 대해 이해하고, 3D펜의 부분별 명칭과 기능을 살펴본다."
        contents1_3="3. 3D펜 이용 시, 지켜야 할 점과 주의할 점을 확인하고 숙지한다."

        contents2_1="1. 3D펜을 이용해 점, 선, 면을 따라 그리고 2D 도형 내부를 채우는 연습을 진행한다."
        contents2_2="2. 2D 도안을 선택하거나 직접 그린 후, 다양한 색의 필라멘트로 2D 형상을 완성한다."
        contents2_3="2. 기초 2D 도형과 필라멘트의 특징을 활용하여 원하는 3D 모형을 완성한다."

        contents3_1="1. 제작과정에서 나타나는 필라멘트의 변화와 필라멘트 특성에 의해 나타나는 현상을 되짚어본다."
        contents3_2="2. 3D펜을 사용했을 때의 어려운 점을 확인하고 추가 기능들을 확인한다."
        contents3_3="3. 3D펜과 3D프린터의 차이와 두 기기의 특징과 장단점을 비교할 수 있다."
        contents3_4="4. 만든 3D 모형의 부족한 점이나 불안정한 부분을 확인하고 이후 수정 방안을 탐색한다."

        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="3D펜의 특징에 대해 이해하고, 활용이 가능한 분야에 대해 알아보고 활용 방법을 생각해본다."
        contents2="직접 도안을 그려보고 원하는 모형을 만들어보면서 메이커에 대한 이해를 돕는다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={penKitImg1}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={0}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={penClass1}
        imgSrc2={penClass2}
        imgSrc3={penClass3}
        imgSrc4={penClass4}
        imgSrc5={penClass5}
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
