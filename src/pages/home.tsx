import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import leftButton from "../images/left-button.png";
import rightButton from "../images/right-button.png";
import speaker from "../images/speaker.png";
import mood from "../images/mood.png";
import game from "../images/game.png";
import balancing from "../images/balancing.png";
import walking from "../images/walking.png";
import car from "../images/car.png";
import tracer from "../images/tracer.png";

import child1 from "../images/main6-1.png";
import child2 from "../images/main6-2.png";
import child3 from "../images/main6-3.png";
import child4 from "../images/main6-4.png";
import child5 from "../images/main6-5.png";
import child6 from "../images/main6-6.png";
import child7 from "../images/main6-7.png";
import child8 from "../images/main6-8.png";
import child9 from "../images/main6-9.png";

import doroLogoGray from "../images/doroLogoGray.png";
import process from "../images/process.png";
import main8Logo from "../images/main8Logo.png";
import doromap from "../images/doromap.png";

import ansan from "../images/ansan.png";
import doroeducation from "../images/doroeducation.png";
import { Helmet } from "react-helmet-async";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { useScrollCount } from "../hooks/useScrollCountup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components"
import MainEduContent from "../components/mainEduContent"
import MainEduType from "../components/mainEduType"
import DoroInstructor from "../components/DoroInstructor"
import ModalMap from "../components/ModalMap";


// const Hoverdiv = styled.div`

//   position : relative;

//   /* div{ */
//     display: none;
//     width: 248.891px;
//     height: 374.219px;
//   }
//   &:hover{
//     div{
//       position: absolute;
//       bottom: 0;
//       display : block;
//       background-color: #000000;
//     }
//   }
// `
const DialogButton = styled.button`
  height: 3.222rem;
  flex-grow: 0;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 2.667rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;

  &:hover {
    width: 10.833rem;
    height: 3.222rem;
    font-size: 2.767rem;
    align-items:center;
  }
`;

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const horizontalScrollRef = useRef<HTMLInputElement>(null);
  const main6ScrollRef = useRef<HTMLInputElement>(null);

  let main3_current_translate = 0;
  let main6_current_translate = 0;

  const main1TopAnimation = useScrollFadeIn(1, "25%", "0s");
  const main1BottomAnimation = useScrollFadeIn(1, "100%", "0.3s");

  const main2TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main2BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main4TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main4BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main9TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main9BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main5TopAnimation = useScrollFadeIn(0.7, "100%", "0s");
  const main5BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main7TopAnimation = useScrollFadeIn(0.7, "100%", "0s");
  const main7BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main5Count1Animation = useScrollCount(3187, 2900, 1500, "명");
  const main5Count2Animation = useScrollCount(2139, 1900, 1500, "개");
  const main5Count3Animation = useScrollCount(274, 250, 1500, "시간");
  const main5Count4Animation = useScrollCount(27, 10, 1500, "개교");

  return (
    <>
      <Helmet>
        <title>DORO</title>
      </Helmet>
      <div className="Main-Container">
        <div className="Main1">
          <div className="Main1-content-container">
            <div {...main1TopAnimation}>
              <p className="Main1-title">
                '4차 산업혁명 핵심기술'
                <br />
                메이킹, 로봇, AI 청소년 교육 솔루션

              </p>
              <p className="Main1-subtitle">
                청소년들에게 4차 산업혁명 핵심기술의 경험을 전달하고 시야를 넓혀주기 위해 노력합니다.
              </p>
            </div>
            <div {...main1BottomAnimation}>
              <Link
                to="/createPost"
                className="Main1-button-frame Main1-button:hover"
              >
                <button className="Main1-button">교육 문의하기</button>
              </Link>
            </div>
          </div>
        </div>

        {/* DORO 대표 교육 콘텐츠 */}
        <div className="Item-center">
          <MainEduContent />
        </div>

        {/* DORO 교육 수행 유형 */}
        <div className="Item-center">
          <MainEduType />
        </div>

        {/* DORO 메이킹 7종 키트 */}
        <div className="Main3">
          <div className="Main3-content-container">
            <div className="Main3-top-container">
              <div className="Main3-top-letter-container">
                <p className="Main3-title">DORO 메이킹 7종 키트</p>
                <p className="Main3-subtitle">
                  DORO의 모든 키트는 자체 개발 및 생산 과정을 통해 탄생합니다.
                </p>
              </div>

              <div className="Main3-top-button-container">
                <button
                  className="Main3-top-left-button"
                >
                  <img
                    src={leftButton}
                    alt="Left"
                    className="Main3-top-left-image"
                  ></img>
                </button>
                <button
                  className="Main3-top-right-button"
                >
                  <img
                    src={rightButton}
                    alt="Right"
                    className="Main3-top-right-image"
                  ></img>
                </button>
              </div>


            </div>

            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              navigation={{
                prevEl: '.Main3-top-left-button',
                nextEl: '.Main3-top-right-button',
              }}
              modules={[Navigation]}
              className="Main3-bottom-container"
            >
              <SwiperSlide>
                
                <div className="Main3-bottom-image1-container">
                  <Link to="/speaker">
                    <img
                      src={speaker}
                      alt="Program"
                      className="Main3-bottom-image1"
                    />
                  </Link>
                  <div className="Main3-bottom-image1-letters">
                    <Link to="/speaker">
                      <p className="Main3-bottom-image-title">
                        DORO DIY 블루투스 스피커
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #IOT #블루투스 #음향학
                    </p>
                    

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image3-container">
                  <Link to="/gameconsole">
                    <img
                      src={game}
                      alt="Program"
                      className="Main3-bottom-image3"
                    />
                  </Link>
                  <div className="Main3-bottom-image3-letters">
                    <Link to="/gameconsole">
                      <p className="Main3-bottom-image-title">
                        DORO DIY 아두이노 게임기
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #중급회로 #임베디드 #아두이노 #코딩
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-walking-container">
                  <Link to="/walking">
                    <img
                      src={walking}
                      alt="Program"
                      className="Main3-bottom-walking"
                    />
                  </Link>
                  <div className="Main3-bottom-walking-letters">
                    <Link to="/walking">
                      <p className="Main3-bottom-image-title">DORO DIY 워킹로봇</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #기초회로 #IR센서 #기구학
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="Main3-bottom-image4-container">
                  <Link to="/balancing">
                    <img
                      src={balancing}
                      alt="Program"
                      className="Main3-bottom-image4"
                    />
                  </Link>
                  <div className="Main3-bottom-image4-letters">
                    <Link to="/balancing">
                      <p className="Main3-bottom-image-title">
                        DORO DIY 밸런싱 로봇
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #제어공학 #PID #아두이노 #코딩
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image2-container">
                  <Link to="/moodlight">
                    <img
                      src={mood}
                      alt="Program"
                      className="Main3-bottom-image2"
                    />
                  </Link>
                  <div className="Main3-bottom-image2-letters">
                    <Link to="/moodlight">
                      <p className="Main3-bottom-image-title">
                        DORO DIY 미니 무드등
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #기초회로 #조도센서 #전자공학
                    </p>
                    <button className="Main3-bottom-image-button">
                      <span className="Main3-bottom-image-inquiry">
                        자세히 보기
                      </span>

                      <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-car-container">
                  <Link to="/ircar">
                    <img src={car} alt="Program" className="Main3-bottom-car"/>
                  </Link>
                  <div className="Main3-bottom-car-letters">
                    <Link to="/ircar">
                      <p className="Main3-bottom-image-title">DORO DIY IR 자동차</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #기초회로 #IR센서 #동역학
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-tracer-container">
                  <Link to="/tracer">
                    <img src={tracer} alt="Program" className="Main3-bottom-tracer"/>
                  </Link>
                  <div className="Main3-bottom-tracer-letters">
                    <Link to="/tracer">
                      <p className="Main3-bottom-image-title">DORO Line Tracer Robot</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #센서처리 #모터제어 #아두이노 #알고리즘
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

        {/* 전공 지식을 갖춘 대학생 강사 */}
        <div className="Main2">
          <div className="Main2-content-container">
            <div className="Item-center"  {...main2BottomAnimation}>
              <DoroInstructor />
            </div>
          </div>
        </div>

        <div className="Main9">
          <div className="Main9-content-container">
            <div className="Main9-letter-container" {...main9TopAnimation}>
              <p className="Main9-title">
                대학생에게 배우는 미래형 진로교육
              </p>
              <p className="Main9-subtitle">
                DORO의 모든 교육은 학생의 시야를 넓혀주기 위한 진로 교육을 포함하고 있습니다.
              </p>
            </div>
            <div className="Main9-image-container" {...main9BottomAnimation}>
              <img src={doroeducation} alt="doroeducation" className="Main9-image"></img>
            </div>
          </div>
        </div>

        <div className="Main5">
          <div className="Main5-content-container">
            <div className="Main5-letter-container" {...main5TopAnimation}>
              <p className="Main5-title">DORO를 신뢰할 수 있는 이유!</p>
            </div>
            <div {...main5BottomAnimation}>
              <div className="Main5-datas-container">
                <div className="Main5-data1-container">
                  <span className="Main5-data1-letter">강의 누적 교육생</span>
                  <span
                    className="Main5-data1-number"
                    {...main5Count1Animation}
                  >
                    4320명
                  </span>
                </div>
                <div className="Main5-data2-container">
                  <span className="Main5-data2-letter">누적 키트 판매수</span>
                  <span
                    className="Main5-data2-number"
                    {...main5Count2Animation}
                  >
                    3312개
                  </span>
                </div>
                <div className="Main5-data3-container">
                  <span className="Main5-data3-letter">강의 누적 시간</span>
                  <span
                    className="Main5-data3-number"
                    {...main5Count3Animation}
                  >
                    488시간
                  </span>
                </div>
                <div className="Main5-data4-container">
                  <span className="Main5-data4-letter">강의 출강 학교 수</span>
                  <span
                    className="Main5-data4-number"
                    {...main5Count4Animation}
                  >
                    27개교
                  </span>
                </div>
                <div className="Main5-data5-container">
                  <span className="Main5-data5-letter">강의 출강 지도</span>
                  <span
                    className="Main5-data5-number"
                  // {...main5Count4Animation}
                  >
                    <DialogButton onClick={onClickToggleModal}>지도 보기</DialogButton>
                  </span>
                </div>
              </div>
              <div className="Main5-doro-logo-gray-container">
                <img
                  src={doroLogoGray}
                  alt="doroLogoGray"
                  className="Main5-doro-logo-gray"
                ></img>
              </div>
            </div>
          </div>
        </div>
        {isOpenModal && (
          <ModalMap onClickToggleModal={onClickToggleModal}>
            <img src={doromap}></img>
          </ModalMap>
        )}

        <div className="Main4">
          <div className="Main4-content-container">
            <div className="Main4-letter-container" {...main4TopAnimation}>
              <p className="Main4-title">
                DORO 교육은 청소년재단과 함께 합니다
              </p>
              <p className="Main4-subtitle">
                DORO 교육은 청소년재단과 함께 진행되어 학교 예산 부담을
                줄여줍니다.
                <br /> 청소년재단 협업 교육 가능 지역 : 경기도 안산시, 시흥시,
                안양시, 수원시, 군포시
              </p>
            </div>
            <div className="Main4-image-container" {...main4BottomAnimation}>
              <img src={ansan} alt="Ansan x DORO" className="Main4-image"></img>
            </div>
          </div>
        </div>

        <div className="Main6">
          <div className="Main6-content-container">
            <div className="Main6-top-container">
              <div className="Main6-top-letter-container">
                <p className="Main6-title">DORO와 함께한 순간들</p>
                <p className="Main6-subtitle">
                  DORO는 경기도 안산시를 중심으로 다양한 학교 학생들에게 경험을
                  전달하고 있습니다.
                </p>
              </div>
              <div className="Main6-top-button-container">
                <button
                  className="Main6-top-left-button"
                >
                  <img
                    src={leftButton}
                    alt="Left"
                    className="Main6-top-left-image"
                  ></img>
                </button>
                <button
                  className="Main6-top-right-button"
                >
                  <img
                    src={rightButton}
                    alt="Right"
                    className="Main6-top-right-image"
                  ></img>
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              navigation={{
                prevEl: '.Main6-top-left-button',
                nextEl: '.Main6-top-right-button',
              }}
              modules={[Navigation]}
              className="Main6-bottom-container"
            >
              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child1}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child2}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child3}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child4}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child5}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child6}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child7}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child8}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child9}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

        <div className="Main7">
          <div className="Main7-content-container">
            <div className="Main7-title-container" {...main7TopAnimation}>
              <p className="Main7-title">DORO 교육 프로세스</p>
            </div>

            <div
              className="Main7-process-images-container"
              {...main7BottomAnimation}
            >
              <img
                src={process}
                alt="ProcessImage"
                className="Main7-image"
              ></img>
            </div>
          </div>
        </div>

        <div className="Main8">
          <div className="Main8-content-container">
            <img
              src={main8Logo}
              alt="dorologo"
              className="Main8-dorologo"
            ></img>
            <p className="Main8-title">
              더 유익하고, 더 즐거운
              <br />
              교육을 아이들에게 선물해주세요
            </p>
            <Link to="/createPost" className="Main8-button-frame">
              <button className="Main8-button Main8-button:hover">
                교육 문의하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
