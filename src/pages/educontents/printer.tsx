import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import printerImg from "../../images/detailContents/slide/edu_detail_printer/upperBannerPrinter.png";
import printerKitImg1 from "../../images/detailContents/slide/edu_detail_printer/printerImage.png";
import printerClass1 from "../../images/detailContents/slide/edu_detail_printer/printerClassImage1.png";
import printerClass2 from "../../images/detailContents/slide/edu_detail_printer/printerClassImage2.png";
import printerClass3 from "../../images/detailContents/slide/edu_detail_printer/printerClassImage3.png";
import printerClass4 from "../../images/detailContents/slide/edu_detail_printer/printerClassImage4.png";
import printerClass5 from "../../images/detailContents/slide/edu_detail_printer/printerClassImage5.png";

export const Printer: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="3D 프린터 교육"
        route2="/printer"
        route2Opacity={1}
        title="3D 프린터 교육"
        subtitle="3D printer Education"
        content="야! 너두 3D 프린터 할 수 있어"
        contentClass="Subtitle-smallFont"
        contentsImg={printerImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1="&nbsp; •  3D 프린터의 원리를 이해하고 직접 3D프린터를 사용할 수 있다."
        contents2_2="&nbsp; •  3D 설계 파일을 이용하여 3D 프린터를 사용하기 위한 G코드로 변환할 수 있다."
        contents2_3="&nbsp; •  오픈소스의 개념과 사회적 원리를 습득하여 학생 스스로 오픈소스를 이용할 수 있다."
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
        contents1_1="1. 3D 프리터의 사용 사례와 원리를 이해한다."
        contents1_2="2. 3D 프린터 구성요소를 이해한다."
        contents1_3="3. 오픈소스의 개념과 사회의 긍정적 영향력을 이해한다."
        contents1_4="4. 슬라이싱 개념과 G코드를 이해한다."

        contents2_1="1. XYZ 큐브 STL 파일을 g코드로 변환하는 슬라이싱을 수행한다."
        contents2_2="2. 슬라이싱한 G 드 파일을 가지고 3D 프린터를 직접 조작하여 출력한다."
        contents2_3="2. 띵기버스에서 오픈소스 STL을 다운받은 후 직접 G코드로 변환한다."

        contents3_1="1. 출력이 완료된 XYZ 큐브를 3D프리터에서 제거 후 출력물을 확인한다."
        contents3_2="2. 본인이 직접 제작한 G코드 파일을 3D 프린터에 출력한다."

        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="오픈소스를 활용하여 3D 프린터를 사용하여 본인만의 굿즈를 제작한다."
        contents2="FDM 방식의 3D 프린터를 조작하여 직접 3D 프린터를 작동하여 출력물을 뽑는다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={printerKitImg1}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={0}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={printerClass1}
        imgSrc2={printerClass2}
        imgSrc3={printerClass3}
        imgSrc4={printerClass4}
        imgSrc5={printerClass5}
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
