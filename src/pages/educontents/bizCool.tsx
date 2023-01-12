import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import bizCoolImg from "../../images/detailContents/slide/edu_detail_bizcool/upperBanneBizCool.png";
import bizCoolClass1 from "../../images/detailContents/slide/edu_detail_bizcool/bizCoolClassImage1.png";
import bizCoolClass2 from "../../images/detailContents/slide/edu_detail_bizcool/bizCoolClassImage2.png";
import bizCoolClass3 from "../../images/detailContents/slide/edu_detail_bizcool/bizCoolClassImage3.png";
import bizCoolClass4 from "../../images/detailContents/slide/edu_detail_bizcool/bizCoolClassImage4.png";
import bizCoolClass5 from "../../images/detailContents/slide/edu_detail_bizcool/bizCoolClassImage5.png";

export const BizCool: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="비즈쿨 제조 창업 교육"
        route2="/bizCool"
        route2Opacity={1}
        title="비즈쿨 제조 창업 교육"
        subtitle="Bizcool manufacturing start-up education"
        content="비즈니스 스쿨 제조 창업 도전기"
        contentClass="Subtitle-smallFont"
        contentsImg={bizCoolImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" • 비즈니스의 개념을 이해하고 차별화된 비즈니스 모델을 만들 수 있다."
        contents2_2=" • 3D설계 및 IOT 제작 기술을 이해하고 직접 사용할 수 있다."
        contents2_3=" • 고객의 관점에서 시제품을 제작하는 능력을 키운다."
        contents3_1="찾아 가는 현장교육"
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
        contents1_1="1. 비즈니스의 구성과 시장경제 체제를 이해한다."
        contents1_2="2. 창업 예시 사례를 통해 기업가 정신을 습득한다."
        contents1_3="3. 제조 창업을 이해하고 창업 아이템 도출 방법을 이해한다."
        contents2_1="1. 디자인씽킹 통해 프로토타입 제품을 기획한다."
        contents2_2="2. 팅커캐드를 이용하여 프로토타입을 3D 설계 한다."
        contents2_3="2. 전자 회로 및 아두이노를 이용하여 제품의 기초 기능을 구현한다."
        contents3_1="1. 제작한 제품을 구매하는 고객 여정지도를 완성한다."
        contents3_2="2. 제품을 직접 3D프린터를 이용하여 프로토타입을 출력한다."
        contents3_3="2. 해당 제품과 기존 제품의 차별화 포인트를 발표하며 시장 이해도를 높인다."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="비즈니스의 원리와 창업 개념을 이해하며 기업가 정신을 함양한다."
        contents2="제조 기반 창업을 위한 프로토타입제작 방법을 습득한다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={bizCoolClass1}
        imgSrc2={bizCoolClass2}
        imgSrc3={bizCoolClass3}
        imgSrc4={bizCoolClass4}
        imgSrc5={bizCoolClass5}
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
