import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import moodLightImg from "../../images/detailContents/slide/edu_detail_moodLight/banner-moodLight.png";
import moodLightKitImg1 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightImage.png";
import moodLightKitImg2 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightPartImage.png";
import moodLightClass1 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightClassImage1.png";
import moodLightClass2 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightClassImage2.png";
import moodLightClass3 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightClassImage3.png";
import moodLightClass4 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightClassImage4.png";
import moodLightClass5 from "../../images/detailContents/slide/edu_detail_moodLight/moodLightClassImage5.png";

export const MoonLight: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="DIY 스마트 무드등"
        route2="/moodLight"
        route2Opacity={1}
        title="DIY 스마트 무드등"
        subtitle="DIY Smart mood light"
        content="동물처름 두발로 걷는 로봇, 스마트 워킹로봇 만들기"
        contentClass="Subtitle-smallFont"
        contentsImg={moodLightImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생, 고등학생"
        contents2_1="&nbsp; •  로봇전문가는 어떤 일을 하는지 예시를 통해 이해한다."
        contents2_2="&nbsp; •  ‘무드등’이라는 창의적 구조물, 창작물 제작을 통한 심미적 감성과 창의적 사고력 향상을 기대한다."
        contents2_3="&nbsp; •  일반 무드등과 스마트 무드등의 차이를 이해하고 불편함을 해결하는 과정을 통해 창의적 문제해결 능력을 배양한다."
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
        contents1_3="3. 조도센서가 빛의 밝기를 측정하는 원리를 이해하고, 실제 로봇에 사용된 예시를 본다."
        contents1_4="4. 제작하는 무드등의 부품이 어떻게 사용되는지 이해한다."
        contents1_5="5. 기존 무드등과 센서를 이용한 무드등의 차이를 이해하고 왜 로봇에 센서를 사용하는 공감한다."
        contents2_1="1. 회로도에 맞춰 각 전자 부품을 직접 연결하여 로봇 전자회로를 제작한다."
        contents2_2="2. 무드등을 조립하고 실제 밝기에 따라 달라지는 LED 빛을 확인한다."
        contents3_1="1. 일반적인 스위치로 만들어진 무드등의 문제점을 해결하는 과정에서 로봇공학지식이 어떻게 사용 되었는지 이해한다."
        contents3_2="2. 일상 속 개선되었으면 하는 물품을 찾아보고 센서를 이용한 무드등처럼 불편함을 해결하는 방법을 고안해 본다."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="로봇의 구성을 이해하고, 로봇에서 사용되는 ‘센서’의 개념을 이해한다."
        contents2="저항, 트렌지스터, LED, CDS센서, 스위치를 직접 다루어 보면서 기초 공학 지식을 습득한다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={moodLightKitImg1}
        imgSrc2={moodLightKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={moodLightClass1}
        imgSrc2={moodLightClass2}
        imgSrc3={moodLightClass3}
        imgSrc4={moodLightClass4}
        imgSrc5={moodLightClass5}
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
