import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import type1 from "../images/icon_people1.png";
import type2 from "../images/icon_people2.png";
import type3 from "../images/icon_people3.png";
import type4 from "../images/icon_people4.png";

import type1_photo from "../images/edutype1.png";
import type2_photo from "../images/edutype2.png";
import type3_photo from "../images/edutype3.png";
import type4_photo from "../images/edutype4.png";

const FadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const MainContainer = styled.div`
    width: 65.555rem;
    height: 59.056rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    // DORO 교육 수행 유형 글자
    p:nth-child(1){
        width: 23.278rem;
        height: 3.222rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 2.667rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.21;
        letter-spacing: normal;
        text-align: center;
        color: var(--doro-black);
        margin-top: 15.778rem;
    }

    // 콘텐츠 별 메인 글자
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
        color: var(--doro-grey);
    }
`

const Box = styled.div`
    display: grid;
    gap: 1.111rem 1.111rem;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
`
const Line = styled.div`
    width: 23.853rem;
    height: 0.194rem;
    flex-grow: 0;
    margin-bottom: 2.944rem;
    background-color: var(--doro-deep);
`
const Container = styled.button<{ hoverimg: string }>`
    width: 26.667rem;
    height: 17.556rem;
    border-radius: 9.9px;
    background-color:var(--doro-super-light-grey); 
    text-align: left;
    position: relative;
    // visibility: visible;
    
    
    &:hover{
        background: url(${({ hoverimg }) => hoverimg});
        background-size: 26.667rem 17.556rem;
        animation: ${FadeIn} 1s ease;
        p:nth-child(2){
            display: none;
            animation: ${FadeOut} 1s ease;
        }
        p:nth-child(3){
            display: none;
            animation: ${FadeOut} 1s ease;

        }
        p:nth-child(4){
            display: none;
            animation: ${FadeOut} 1s ease;

        }
        span{
            display: none;
            animation: ${FadeOut} 1s ease;

        }
        img{
            display: none;
            animation: ${FadeOut} 1s ease;

        }
        p:nth-child(5){
            display: block;
            text-align: right;
            border-radius: 5px;
            text-shadow: 0 0 25px rgba(33, 33, 33, 0.8);
        }
    }
    img{
        width: 3.737rem;
        height: 3.667rem;
        position: absolute;
        left: 2.222rem;
        top: 2.167rem;
    }
    p:nth-child(2){
        position: absolute;
        left: 2.389rem;
        top: 7.778rem;
        font-family: Pretendard;
        font-size: 0.889rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: var(--doro-deep);
    }

    p:nth-child(3){
        position: absolute;
        left: 2.222rem;
        top: 8.667rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 2rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.61;
        letter-spacing: normal;
        text-align: left;
        color: #000;
    }

    p:nth-child(4){
        position: absolute;
        left: 2.222rem;
        top: 12.111rem;
        width: 23.111rem;
        height: 2.778rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.889rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: var(--doro-grey);
    }

    span{
        position: absolute;
        left: 2.222rem;
        top: 12.111rem;
        width: 23.111rem;
        height: 2.778rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.889rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        text-align: left;
        color: var(--doro-black);
        }
    // 오른쪽 밑 글자?
    p:nth-child(5){
        display: none;
        position: absolute;
        right: 1.389rem;
        bottom: 0.82rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 1.111rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        text-align: left;
        color: var(--doro-super-light-grey);
        animation: ${FadeIn} 1s ease;
    }
`

const MainEduContent = () => {

    const navigate = useNavigate();
    const DetailContentsRoutes = (index : number) => {
        navigate('/showDetailContent', {state : index});
      }

    function preloading (imageArray : any) {
        let n = imageArray.length;
        for (let i = 0; i < n; i++) {
            let img = new Image();
            img.src = imageArray[i];
        }
    }

    const imgList : string[] = [
      type1_photo,
      type2_photo,
      type3_photo,
      type4_photo
    ]

      useEffect(() => {
        preloading(imgList)
    }, [])

    const dummyData = [
        {
            iconURL: type1,
            title: "찾아가는 현장 교육",
            textblue: "현장에서 생생하게",
            textBold: "교육 현장에 DORO 선생님들이 직접 방문하여 ",
            textNormalFirst: " 각 지역별 학교, 학원, 청소년 재단, 문화센터 등의 ",
            textNormalLast: "교육을 진행합니다.",
            hoverimg: type1_photo,
            hovertext: "현장교육"
        },
        {
            iconURL: type2,
            title: "체험형 교육 부스",
            textblue: "부스에서 만나는 4차 산업혁명",
            textBold: " DORO 선생님들이 기술 체험의 경험을 전달",
            textNormalFirst: "과학 축제, 진로 체험 축제, 청소년 축제 등의 현장에서",
            textNormalLast: "합니다.",
            hoverimg: type2_photo,
            hovertext: "교육부스"
        },
        {
            iconURL: type3,
            title: "DORO 챌린지",
            textblue: "창의적인 문제해결능력 향상",
            textBold: " 문제를 해결해 나가며 최종적으로 청소년에게 성취감을 제공",
            textNormalFirst: "라인 트레이싱 대회, 해커톤 등의 대회를 개최합니다. 팀원들과 함께",
            textNormalLast: "합니다.",
            hoverimg: type3_photo,
            hovertext: "DORO 챌린지"
        },
        {
            iconURL: type4,
            title: "비대면 온라인 교육",
            textblue: "실시간 소통하며 집에서도 안전하게",
            textBold: " 비대면 온라인 교육을 진행",
            textNormalFirst: "DORO 선생님들이 직접 방문하기 어려울 경우",
            textNormalLast: "합니다.",
            hoverimg: type4_photo,
            hovertext: "온라인 교육"
        }
    ]
    return (
        <MainContainer>
            <p>
                DORO 교육 수행 유형
            </p>
            <Line></Line>
            <Box>

                {dummyData.map((data, idx) =>
                    <Container key={idx} hoverimg={data.hoverimg} onClick={()=>{DetailContentsRoutes(idx+1)}}>
                        <img src={data.iconURL} alt="icon" />
                        <p>
                            {data.textblue}
                        </p>
                        <p>
                            {data.title}
                        </p>

                        <p>
                            {data.textNormalFirst}
                            <strong>{data.textBold}</strong>
                            {data.textNormalLast}
                        </p>
                        <p>
                            {data.hovertext}
                        </p>
                    </Container>
                )}
            </Box>
        </MainContainer>
    )
}

export default MainEduContent;