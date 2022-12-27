import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import robot from "../images/icon_robot.png";
import software from "../images/icon_software.png";
import printer from "../images/icon_3dprint.png";
import ai from "../images/icon_ai.png";

import rightarrow from "../images/rightarrow.png";


const MainContainer = styled.div`
    width: 65.555rem;
    display: flex;
    flex-direction: column;
    /* title */
    p:nth-child(1){
        width: 25.556rem;
        height: 3.222rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 2.667rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.21;
        letter-spacing: normal;
        text-align: left;
        color: var(--doro-black);
        margin-top: 11.222rem;
    }
    /* description under title */
    p:nth-child(3){
        width: 25.111rem;
        height: 1.444rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: 0.9px;
        text-align: left;
        margin-top: 0.944rem;
        color: var(--doro-grey);
    }
`

const Box = styled.div`
    display: flex;
    gap: 1.111rem;
`
const Line = styled.div`
    width: 25.667rem;
    height: 0.194rem;
    flex-grow: 0;
    background-color: var(--doro-deep);
`
// 콘텐츠 박스
const Container = styled.div`
    width: 15.556rem;
    height: 23.5rem;
    border-radius: 10px;
    margin-top: 2.944rem;
    border: 2px solid var(--doro-super-light-grey);
    background-color: var(--doro-super-light-grey);
    text-align: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s;
    &:hover{
        background-color: var(--doro-super-light-grey);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
        border: 2px solid transparent;
        background-image: linear-gradient(var(--doro-super-light-grey), var(--doro-super-light-grey)), 
        linear-gradient(to bottom right,#48C6EF, #6F86D6);
        background-clip: content-box, border-box;
    }
    /* 박스 내부 타이틀 */
    p:nth-child(2){
        font-family: Pretendard;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.61;
        color: #000;
        margin-top: 0.768rem;
    }
    /* 설명 */
    p:nth-child(3){
        width: 12.911rem;
        height: 5.111rem;
        font-family: Pretendard;
        font-size: 0.833rem;
        font-weight: 400;
        line-height: 1.53;
        top: 13rem;
        margin-left: auto;
        margin-right: auto;
        color: var(--doro-grey);
    }
    /* 교육커리큘럼보기 */
    span{
        margin-bottom: 1.111rem;
        position: absolute;
        left:20px;
        bottom: 0;
        width: 6.778rem;
        height: 1.278rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.889rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: 0.32px;
        text-align: left;
        color: var(--doro-black);
        }

`

const Image = styled.img`
    width: 5.994rem;
    height: 6.51rem;
    margin-top: 1.889rem;
    margin-left: auto;
    margin-right: auto;
`

const Rightarrow = styled.img`
    width: 0.389rem;
    height: 0.778rem;
    flex-grow: 0;
    position: absolute;
    bottom: 1.361rem;
    right: 1.111rem;
`


const MainEduContent = () => {
    const dummyData = [
        {
            imgURL: robot,
            title: "ROBOT",
            textBold: "설계, 조립, 제어 원리 이해를 통해 로봇공학적 사고력",
            textNormalFirst: "로봇의 원리와 구성을 공학적으로 이해하고 ",
            textNormalLast: "을 키웁니다.",
            link: " "
        },
        {
            imgURL: software,
            title: "SOFTWARE",
            textBold: "HTML/CSS/JS 부터 로봇 소프트웨어 코딩에 필요한 C++,C, 아두이노",
            textNormalFirst: "웹 개발에 사용되는",
            textNormalLast: "까지 고객 맞춤형소프트웨어 교육을 진행합니다.",
            link: " "
        },
        {
            imgURL: printer,
            title: "MAKER",
            textBold: " 3D 프린팅을 체험하고 출력물을 이용해 키트를 직접 조립",
            textNormalFirst: "4차 산업혁명 핵심기술 중 하나인",
            textNormalLast: "해보는 교육 프로그램 입니다.",
            link: " "
        },
        {
            imgURL: ai,
            title: "AI",
            textBold: " Ai 예제 이해 교육을 통해 인공지능의 원리를 이해",
            textNormalFirst: "머신러닝 학습도구 티처블 머신(Teachable Machine)을 이용한 교육과 ",
            textNormalLast: "합니다.",
            link: " "
        }
    ]
    return (
        <MainContainer>
            <p>
                DORO 대표 교육 콘텐츠
            </p>
            <Line></Line>
            <p>
                청소년들에게 4차산업혁명 핵심기술의 경험을 전달합니다.
            </p>
            <Box>

                {dummyData.map((data, idx) =>
                    <Container key={idx}>
                        <Image src={data.imgURL} alt="icon" />
                        <p>
                            {data.title}
                        </p>

                        <p>
                            {data.textNormalFirst}
                            <strong>{data.textBold}</strong>
                            {data.textNormalLast}
                        </p>
                        <span>교육 커리큘럼 보기</span>
                        <Link to={data.link}></Link>
                        <Rightarrow src={rightarrow} />
                    </Container>
                )}
            </Box>
        </MainContainer>
    )
}

export default MainEduContent;