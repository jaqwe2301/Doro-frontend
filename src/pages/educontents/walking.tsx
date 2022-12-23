import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import eduContents from "../../images/bannerCategory/eduContents.png";
import walkingImg from "../../images/detailContents/walking.png";
import walkingKitImg1 from "../../images/detailContents/slide/Education_detail_walking/walkingImage1.png";
import walkingKitImg2 from "../../images/detailContents/slide/Education_detail_walking/walkingImage2.png";
import walkingClass1 from "../../images/detailContents/slide/Education_detail_walking/walkingClassImage11.png";
import walkingClass2 from "../../images/detailContents/slide/Education_detail_walking/walkingClassImage12.png";
import walkingClass3 from "../../images/detailContents/slide/Education_detail_walking/walkingClassImage13.png";
import walkingClass4 from "../../images/detailContents/slide/Education_detail_walking/walkingClassImage14.png";
import walkingClass5 from "../../images/detailContents/slide/Education_detail_walking/walkingClassImage15.png";

export const Walking: React.FC = () => {
  return (
    <>
      <Banner
        route={eduContents}
        title="DIY 워킹 로봇"
        subtitle="DIY walking robot"
        content="사물인터넷, 블루투스 통신을 이해하고, DIY 블루투스 스피커 제작하기"
        contentClass="Subtitle-smallFont"
        wid={6.111}
        contentsImg={walkingImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생, 고등학생"
        contents2_1=" 블루투스 스피커 제작을 통해 심미적 감성과 창의적 사고력 향상을 기대한다."
        contents2_2=" 일상에서 사용 가능한 블루투스 스피커를 본인이 직접 제작하며 공학적, 과학적 흥미도를 높인다."
        contents2_3=" 근거리 무선통신 기술의 종류와 개념을 이해하고 학생들의 공학적 상상력을 자극한다."
        contents3_1="찾아 가는 현장교육, 체험형 교육 부스"
        liClass1="EduTabble-table-subContents"
        liClass2="EduTabble-table-subContents List-style-dics"
        liClass3="EduTabble-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="1. 4차산업 기술인 사물인터넷(IoT)을 이해하고, 실생활에 사용되는 예시를 알아본다."
        contents1_2="2. 사물인터넷에 활용되는 통신 기술과 블루투스 통신 개념을 영상을 통해 심화적으로 이해한다."
        contents1_3="3. DIY 블루투스 스피커 설계 및 제작의 원리를 이해하여, 어드벤처 디자인 전공 경험을 키운다"
        contents2_1="1. DIY 스피커 조립 실습을 통해 설계와 조립 원리를 이해하여 메이킹 능력을 키운다."
        contents2_2="2. 스트리퍼로 전선의 피복을 제거하는 메이킹 장비 사용을 숙달한다."
        contents2_3="3. 스피커 내부 부품인 블루투스 모듈, 스피커 등 배선 실습으로, 전자 공학 기초 지식을 습득한다."
        contents3_1="1. 배선이 잘 되었는지, 직접 본인 핸드폰과 스피커의 페어링을 통해 테스트한다."
        contents3_2="2. 무선 스피커가 개발되는 과정에서 공학지식이 어떻게 사용되었는지 이해한다."
        contents3_3="3. 이론과 실습을 바탕으로 사물인터넷 기술을 적용할 만한 새로운 아이디어를 고안한다."
        liClass1="EduTabble-table-subContents"
        liClass2="EduTabble-table-subContents"
        liClass3="EduTabble-table-subContents"
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
        imgSrc1={walkingKitImg1}
        imgSrc2={walkingKitImg2}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={walkingClass1}
        imgSrc2={walkingClass2}
        imgSrc3={walkingClass3}
        imgSrc4={walkingClass4}
        imgSrc5={walkingClass5}
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
