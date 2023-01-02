import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import chemicalGardenImg from "../../images/detailContents/slide/education_detail_chemicalgarden/upperBannerChemicalGarden.png";
import chemicalGardenKitImg1 from "../../images/detailContents/slide/education_detail_chemicalgarden/chemicalGardenImage.png";
import chemicalGardenClass1 from "../../images/detailContents/slide/education_detail_chemicalgarden/chemicalGardenClassImage1.png";
import chemicalGardenClass2 from "../../images/detailContents/slide/education_detail_chemicalgarden/chemicalGardenClassImage2.png";
import chemicalGardenClass3 from "../../images/detailContents/slide/education_detail_chemicalgarden/chemicalGardenClassImage3.png";
import chemicalGardenClass4 from "../../images/detailContents/slide/education_detail_chemicalgarden/chemicalGardenClassImage4.png";
import chemicalGardenClass5 from "../../images/detailContents/slide/education_detail_chemicalgarden/chemicalGardenClassImage5.png";

export const Chemical: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="금속 반응 화학정원"
        route2="/googleai"
        route2Opacity={1}
        title="금속 반응 화학정원"
        subtitle="Metallic Reaction Chemical Garden"
        content="금속염의 결정 형성과 삼투 현상을 이해하고, 생화학적 원리를 활용한 화학 정원 제작해보기"
        contentClass="Subtitle-smallFont"
        contentsImg={chemicalGardenImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" 화학 정원 제작을 통해 심미적 감성과 창의적 사고력 향상을 기대한다."
        contents2_2=" 일상에 널리 존재하는 삼투 현상을 본인이 직접 관찰하며 공학적, 과학적 흥미도를 높인다."
        contents2_3=" 결정 생성 및 삼투 현상의 개념을 이해하고 학생들의 공학적 상상력을 자극한다."
        contents3_1="찾아 가는 현장교육, 체험형 교육 부스"
        liClass1="EduTable-table-subContents"
        liClass2_1="List-style-dics"
        liClass2_2="List-style-dics"
        liClass2_3="List-style-dics"
        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"
        contents1_1=" 선생님의 고민, 10대 시절의 가장 큰 고민 "
        contents1_2=" 선생님이 좋아하는 것과 잘했던 것 그리고 도전했던 이야기"
        contents1_3=" 내가 잘하는 것과 좋아하는 것은 무엇일까 ? (4인 1조가 되어 서로 소개하기)"
        contents2_1=" 잘하는 것과 좋아하는 것의 공통점 찾아내기"
        contents2_2=" 생명나노공학과 강사 선생님의 생명나노공학과 소개"
        contents2_3=" 삼투 현상, 화학 : 금속염 결정 형상 과정 및 이론 개념 이해하기"
        contents3_1=" 화학정원 키트 직접 제작하기"
        contents3_2=" 서로 다른 금속염을 사용해 다른 친구들이 만든 다양한 결정 모습 관찰해보기"
        contents3_3=" 왜 결정이 형성되는지 결정형성 과정의 화학적 원리와 생명과학에 연관된 삼투현상 이해하기"
        liClass1="EduTable-table-subContents"
        liClass1_1="List-style-dics"
        liClass1_2="List-style-dics"
        liClass1_3="List-style-dics"
        liClass2="EduTable-table-subContents"
        liClass2_1="List-style-dics"
        liClass2_2="List-style-dics"
        liClass2_3="List-style-dics"
        liClass3="EduTable-table-subContents"
        liClass3_1="List-style-dics"
        liClass3_2="List-style-dics"
        liClass3_3="List-style-dics"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="금속염의 결정 형성 과정을 이해하고, 삼투 현상의 원리와 우리 주변의 삼투 현상 사례를 학습한다."
        contents2="삼투 현상과 염 결정 형성을 통해 화학과 생명 과학 지식이 어우러진 생화학적 개념을 알아본다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={chemicalGardenKitImg1}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={0}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={chemicalGardenClass1}
        imgSrc2={chemicalGardenClass2}
        imgSrc3={chemicalGardenClass3}
        imgSrc4={chemicalGardenClass4}
        imgSrc5={chemicalGardenClass5}
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
