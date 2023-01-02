import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import luminolImg from "../../images/detailContents/slide/edu_detail_luminol/upperBannerLuminol.png";
import luminolKitImg1 from "../../images/detailContents/slide/edu_detail_luminol/luminolImage.png";
import luminolClass1 from "../../images/detailContents/slide/edu_detail_luminol/luminolClassImage1.png";
import luminolClass2 from "../../images/detailContents/slide/edu_detail_luminol/luminolClassImage2.png";
import luminolClass3 from "../../images/detailContents/slide/edu_detail_luminol/luminolClassImage3.png";
import luminolClass4 from "../../images/detailContents/slide/edu_detail_luminol/luminolClassImage4.png";
import luminolClass5 from "../../images/detailContents/slide/edu_detail_luminol/luminolClassImage5.png";

export const Luminol: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="루미놀 발광 "
        route2="/luminol"
        route2Opacity={1}
        title="루미놀 발광 "
        subtitle="Luminol reaction KIT"
        content="화학 발광을 이해하고 루미놀 반응 실험 체험하기 & 혈액형 판별하기"
        contentClass="Subtitle-smallFont"
        contentsImg={luminolImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생"
        contents2_1="&nbsp; •  루미놀 발광 반응을 통해 생화학적 지식과 이공학적 활용 능력 향상을 기대한다."
        contents2_2="&nbsp; •  산과 염기, 화학 발광의 개념을 이해하고 학생들의 생물 및 화학적 상상력을 자극한다."
        contents2_3="&nbsp; •  항원-항체 반응을 배우며, 인체의 면역 메커니즘을 알아볼 수 있다."
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
        contents1_1="1. 화학 반응을 이용한 루미놀 발광 실험의 원리를 이해하고, 실생활에 사용되는 예시를 알아본다."
        contents1_2="2. 시약을 활용한 인체 구성 성분의 발광 반응 과정을 이해하여, 과학 실험 실습 경험을 키운다."
        contents1_3="3. 항원, 항체의 개념과 특성을 통한 항원-항체 반응을 이해하고, 항원-항체 반응을 치료 및 의료 과정에 적용한 사례를 알아본다."
        contents1_4="4. 혈청의 응집반응을 통한 혈액형 판별 원리를 이해한다."

        contents2_1="1. 실제 발광 반응을 확인하고 사용한 시약과 헤모글로빈의 양에 따른 발광 정도와 발광 시간을 비교해본다."
        contents2_2="2. 혈액에 항A,, B 혈청을 떨어뜨려 응집반응을 관찰해돈다.."
        contents2_3="3. 채혈침을 사용해 자신의 혈액을 채취하고, 혈청을 떨어뜨려 자신의 혈액형을 판별해본다."

        contents3_1="1. 불을 끄고 발광 정도를 직접 관찰해본다."
        contents3_2="2. 혈청을 떨어뜨릴 때, 혈액의 농도 및 용량에 따른 응집 속도를 비교해본다."
        contents3_3="3. 혈액의 응집 반응과, 항원-항체 반응을 통해 우리 몸의 면역 메커니즘을 이해한다."

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

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={luminolKitImg1}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={0}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={luminolClass1}
        imgSrc2={luminolClass2}
        imgSrc3={luminolClass3}
        imgSrc4={luminolClass4}
        imgSrc5={luminolClass5}
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
