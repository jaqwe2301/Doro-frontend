import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import googleEarthImg from "../../images/detailContents/slide/edu_detail_googleEarth/upperBannerGoogleEarth.png";
import googleEarthClass1 from "../../images/detailContents/slide/edu_detail_googleEarth/googleEarthClassImage1.png";
import googleEarthClass2 from "../../images/detailContents/slide/edu_detail_googleEarth/googleEarthClassImage2.png";
import googleEarthClass3 from "../../images/detailContents/slide/edu_detail_googleEarth/googleEarthClassImage3.png";
import googleEarthClass4 from "../../images/detailContents/slide/edu_detail_googleEarth/googleEarthClassImage4.png";
import googleEarthClass5 from "../../images/detailContents/slide/edu_detail_googleEarth/googleEarthClassImage5.png";

export const GoogleEarth: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="Google 어스 교육"
        route2="/googleearth"
        route2Opacity={1}
        title="Google 어스 교육"
        subtitle="Google Earth Education"
        content="친구들과 학교에서 시작하는 세계여행"
        contentClass="Subtitle-smallFont"
        contentsImg={googleEarthImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생"
        contents2_1="&nbsp; • 디지털 장비의 올바른 사용법을 숙지한다."
        contents2_2="&nbsp; • ‘나라’, ‘지도’, ‘여행’의 개념을 익히며 디지털 장비를 이용하는 방법에 숙달한다."
        contents2_3="&nbsp; • 위성사진 및 3D뷰를 통해 지구의 다양한 지역을 탐험한다."
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
        contents1_1="1. Google 사용 방법을 익히고, Google Earth 기능을 이해한다."
        contents1_2="2. 현재 본인의 위치(학교)를 Google Earth를 이용해 찾는다."
        contents1_3="3. 지도의 개념을 이해하고 학생 스스로 희망하는 나라와 여행지를 선택한다."

        contents2_1="1. 여행을 희망한 장소를 Google Earth를 이용해 찾아본다."
        contents2_2="2. 해당 장소를 Youtube를 이용해 검색한다."
        contents2_3="3. 구글 PPT를 이용하여 선택한 여행지를 소개하는 PPT를 직접 제작한다."

        contents3_1="1. 본인이 찾은 지역의 나라 및 Google Earth상의 사진을 공유한다."
        contents3_2="2. 제작한 PPT를 통해 여행하고 싶은 나라 정보를 공유한다."
        contents3_3="3. PPT 제작을 위한 정보를 조사하며, 올바른 디지털 리터러시 개념을 습득한다."

        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="구글에서 제공하는 프레젠테이션을 직접 사용하면서 발표 능력과 인터넷 정보 가공 방법을 습득한다."
        contents2="Youtube의 올바른 검색 방법을 습득하여 건강한 디지털 생활법을 공유한다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={googleEarthClass1}
        imgSrc2={googleEarthClass2}
        imgSrc3={googleEarthClass3}
        imgSrc4={googleEarthClass4}
        imgSrc5={googleEarthClass5}
      />

      <Notice
        title="공지사항"
        titleMarginTop={12.222}
        contentsText1="- 캠이 달려있는 노트북이나 컴퓨터를 준비해주세요."
        contentsText2="- DORO 교육 콘텐츠는 전공 지식을 갖춘 대학생 강사님이 진행합니다."
        contentsText3="- DORO 교육 콘텐츠는 강사님의 진로 스토리를 포함하고 있습니다."
        contentsText4="- 원활한 교육 자료 시청을 위해 스크린, 빔 프로젝트 등의 시청각 장비를 준비해주세요."
        contentsText5="- 해당 교육을 진행하기 위해선 1인 메이킹 활동이 가능한 사이즈의 책상이 필요합니다."
        contentsText6="- 코로나-19 감염병 예방 및 안전한 교육을 위해 메이킹 안전 수칙을 준수해주세요."
        contentsText7="- 문의 : 010-7633-0371"
      />
    </>
  );
};
