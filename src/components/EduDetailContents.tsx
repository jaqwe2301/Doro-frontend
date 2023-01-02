import React, { useState } from "react";
import { Link } from "react-router-dom";


const EduDetailContents = () => {

  const [main1, setMainBtn1] = useState(true);
  const [main2, setMainBtn2] = useState(false);
  const [main3, setMainBtn3] = useState(false);
  const [main4, setMainBtn4] = useState(false);

  const mainBtnControl = (btn: string) => {
    setMainBtn1(false);
    setMainBtn2(false);
    setMainBtn3(false);
    setMainBtn4(false);

    switch (btn) {
      case "IsMain1":
        setMainBtn1(true);
        break;
      case "IsMain2":
        setMainBtn2(true);
        break;
      case "IsMain3":
        setMainBtn3(true);
        break;
      case "IsMain4":
        setMainBtn4(true);
        break;
    }
  }

  let item = [{
    a1: [
      {
        img: 'walking',
        hash: '#IR센서 #기초회로 #기구학',
        title: 'DIY 워킹 로봇',
        link: "/walking"
      },
      {
        img: "balancing",
        hash: "#제어공학 #PID #아두이노 #코딩",
        title: "DIY 밸런싱 로봇",
        link: "/balancing"

      },
      {
        img: "IRcar",
        hash: "#IR센서 #기초회로 #동역학",
        title: "DIY IR 자동차",
        link: "/ircar"

      },
      {
        img: "tracer",
        hash: "#센서처리 #모터제어 #아두이노 #알고리즘",
        title: "LINE TRACER",
        link: "/tracer"

      },
    ],
    a2: [
      {
        img: 'gameConsole',
        hash: '#임베디드 #중급회로 #아두이노 #코딩',
        title: 'DIY 아두이노 게임기',
        link: "/gameconsole"

      },
      {
        img: "balancing",
        hash: "#제어공학 #PID #아두이노 #코딩",
        title: "DIY 밸런싱 로봇",
        link: "/balancing"

      },
      {
        img: "piano",
        hash: "#초음파센서 #아두이노 #코딩",
        title: "초음파 피아노",
        link: "/piano"

      },
      {
        img: "tracer",
        hash: "#센서처리 #모터제어 #아두이노 #알고리즘",
        title: "LINE TRACER",
        link: "/tracer"

      },
    ],
    a3: [
      {
        img: 'gameConsole',
        hash: '#임베디드 #중급회로 #아두이노 #코딩',
        title: 'DIY 아두이노 게임기',
        link: "/gameconsole"

      },
      {
        img: "balancing",
        hash: "#제어공학 #PID #아두이노 #코딩",
        title: "DIY 밸런싱 로봇",
        link: "/balancing"

      },
      {
        img: "IRcar",
        hash: "#IR센서 #기초회로 #동역학",
        title: "DIY IR 자동차",
        link: "/ircar"

      },
      {
        img: "moodLight",
        hash: "#기초회로 #조도센서 #전자공학",
        title: "스마트 무드등",
        link: "/moodlight"

      },
      {
        img: 'walking',
        hash: '#IR센서 #기초회로 #기구학',
        title: 'DIY 워킹 로봇',
        link: "/walking"

      },
      {
        img: 'speaker',
        hash: '#IOT #블루투스 #음항학',
        title: 'DIY 블루투스 스피커',
        link: "/speaker"

      },
      {
        img: "tracer",
        hash: "#센서처리 #모터제어 #아두이노 #알고리즘",
        title: "LINE TRACER",
        link: "/tracer"

      },
      {
        img: "bizCool",
        hash: "#비즈쿨 #진로교육 #창업교육",
        title: "비즈쿨 제조 창업 교육",
        link: "/bizcool"

      },
    ],
    a4: [
      {
        img: 'literacy',
        hash: '#디지털리터러시 #디지털역량 #정보활용',
        title: '디지털 리터러시',
        link: "/literacy"

      },
      {
        img: "googleEarth",
        hash: "#구글 #구글어스 #정보활용",
        title: "Google 어스",
        link: "/googleearth"

      },
      {
        img: "googleAI",
        hash: "#구글 #티쳐블머신 #AI",
        title: "Google 티쳐블 머신",
        link: "/googleai"

      },
      {
        img: "googleOpen",
        hash: "#구글 #오픈소스 #AI #알고리즘",
        title: "Google AI 예제 원리",
        link: "/googleopen"

      },
    ],
    a5: [
      {
        img: '3Dprinter',
        hash: '#3D프린터 #메이커 #창작활동',
        title: '3D 프린터 교육',
        link: "/pinter"

      },
      {
        img: "3Dpen",
        hash: "#3Dpen #메이커 #창작활동",
        title: "3D 펜 교육",
        link: "/pen"

      },
      {
        img: "tinkercad",
        hash: "#3D설계 #팅커캐드 #CAD",
        title: "3D 팅커캐드 설계 교육",
        link: "/tinkercad"

      },
      // {
      //   img: "luminol",
      //   hash: "#루미놀반응 #헤모글로빈 #혈흔반응",
      //   title: "루미놀 발광 키트",
      //   link: "/luminol"

      // },
    ],
    a6: [
      {
        img: "luminol",
        hash: "#루미놀반응 #헤모글로빈 #혈흔반응",
        title: "루미놀 발광 키트",
        link: "/luminol"

      },
      {
        img: "chemical",
        hash: "#삼투현상 #금속반응 #광섬유",
        title: "금속반응 화학 정원",
        link: "/chemical"
      },
    ],
    b: [
      {
        img: 'gameConsole',
        hash: '#임베디드 #중급회로 #아두이노 #코딩',
        title: 'DIY 아두이노 게임기',
        link: "/gameconsole"

      },
      {
        img: "balancing",
        hash: "#제어공학 #PID #아두이노 #코딩",
        title: "DIY 밸런싱 로봇",
        link: "/balancing"

      },
      {
        img: "IRcar",
        hash: "#IR센서 #기초회로 #동역학",
        title: "DIY IR 자동차",
        link: "/ircar"

      },
      {
        img: "moodLight",
        hash: "#기초회로 #조도센서 #전자공학",
        title: "스마트 무드등",
        link: "/moodlight"

      },
      {
        img: 'walking',
        hash: '#IR센서 #기초회로 #기구학',
        title: 'DIY 워킹 로봇',
        link: "/walking"

      },
      {
        img: 'speaker',
        hash: '#IOT #블루투스 #음항학',
        title: 'DIY 블루투스 스피커',
        link: "/speaker"

      },
    ],
    c: [
      {
        img: "tracer",
        hash: "#센서처리 #모터제어 #아두이노 #알고리즘",
        title: "LINE TRACER",
        link: "/tracer"

      },
    ],
    d: [
      {
        img: 'pygame',
        hash: '#파이썬 #파이게임 #게임개발',
        title1: '파이게임 모듈 활용',
        title2: "파이썬 교육",
        link: "/pygame"

      },
      {
        img: 'python',
        hash: "#파이썬 #파이썬활용 #오픈소스",
        title1: "파이썬 모듈 활용",
        title2: "두뇌 게임 & 도형 제작",
        link: "/python"


      },
      {
        img: "tinkercad",
        hash: "#3D설계 #팅커캐드 #CAD",
        title1: "팅커캐드",
        title2: "아두이노 시뮬레이션",
        link: "/tinkercad"


      },
    ],
  }]



  const [sub1, setSubBtn1] = useState(true);
  const [sub2, setSubBtn2] = useState(false);
  const [sub3, setSubBtn3] = useState(false);
  const [sub4, setSubBtn4] = useState(false);
  const [sub5, setSubBtn5] = useState(false);
  const [sub6, setSubBtn6] = useState(false);


  const subBtnControl = (btn: string) => {
    setSubBtn1(false);
    setSubBtn2(false);
    setSubBtn3(false);
    setSubBtn4(false);
    setSubBtn5(false);
    setSubBtn6(false);

    switch (btn) {
      case "IsSub1":
        setSubBtn1(true);
        break;
      case "IsSub2":
        setSubBtn2(true);
        break;
      case "IsSub3":
        setSubBtn3(true);
        break;
      case "IsSub4":
        setSubBtn4(true);
        break;
      case "IsSub5":
        setSubBtn5(true);
        break;
      case "IsSub6":
        setSubBtn6(true);
        break;
      case "None":
        setSubBtn1(false);
        setSubBtn2(false);
        setSubBtn3(false);
        setSubBtn4(false);
        setSubBtn5(false);
        setSubBtn6(false);
    }
  }


  var contentsMap1_1 = item.map(function (nested) {
    return nested.a1.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_2 = item.map(function (nested) {
    return nested.a2.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_3 = item.map(function (nested) {
    return nested.a3.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_4 = item.map(function (nested) {
    return nested.a4.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_5 = item.map(function (nested) {
    return nested.a5.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap1_6 = item.map(function (nested) {
    return nested.a6.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap2 = item.map(function (nested) {
    return nested.b.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap3 = item.map(function (nested) {
    return nested.c.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text">{a.hash}</p>
            <p className="Title-text">{a.title}</p>
          </Link>
        </button>
      );
    });
  });

  var contentsMap4 = item.map(function (nested) {
    return nested.d.map(function (a) {
      return (
        <button className="EduDetail-content-container">
          <Link to={a.link}>
            <img src={require('../images/detailContents/' + a.img + '.png')} />
            <p className="HashTag-text-Main4">{a.hash}</p>
            <p className="Title-text-Main4">{a.title1}</p>
            <p className="Title-text">{a.title2}</p>
          </Link>
        </button>
      );
    });
  });

  return (
    <>

      {/* ------------------메인 카테고리------------------  */}

      <div className="MainCategory-container" style={{marginBottom: main2 || main3 || main4 ? "3.272rem" : ""}}>
        <button
          className={(main1 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain1'); subBtnControl('IsSub1'); }}
        >
          찾아가는 현장 교육
        </button>

        <button
          className={(main2 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain2'); subBtnControl('None'); }}
        >
          체험형 교육 부스
        </button>

        <button
          className={(main3 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain3'); subBtnControl('None'); }}
        >
          DORO 챌린지
        </button>

        <button
          className={(main4 ? "MainCategory-click" : "MainCategory-click-off")}
          type="button"
          onClick={() => { mainBtnControl('IsMain4'); subBtnControl('None'); }}
        >
          비대면 온라인 교육
        </button>
      </div>

      {/* ------------------서브 카테고리------------------  */}

      <div className="SubCategory">
        {main1 ? <div className="SubCategory-container">

          <button
            className={(sub1 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {
              subBtnControl('IsSub1');
              // changeMap();
            }}
          >
            로봇 교육
          </button>

          <button
            className={(sub2 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => {
              subBtnControl('IsSub2');
              // changeMap();
            }}
          >
            소프트웨어 교육
          </button>

          <button
            className={(sub3 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => subBtnControl('IsSub3')}
          >
            메이커 교육
          </button>

          <button
            className={(sub4 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => subBtnControl('IsSub4')}
          >
            AI 교육
          </button>

          <button
            className={(sub5 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => subBtnControl('IsSub5')}
          >
            3D 교육
          </button>

          <button
            className={(sub6 ? "SubCategory-click" : "SubCategory-click-off")}
            type="button"
            onClick={() => subBtnControl('IsSub6')}
          >
            ETC
          </button>
        </div>
          : <></>}

      </div>

      <div className={(sub1 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_1}
      </div>
      <div className={(sub2 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_2}
      </div>
      <div className={(sub3 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_3}
      </div>
      <div className={(sub4 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_4}
      </div>
      <div className={(sub5 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_5}
      </div>
      <div className={(sub6 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap1_6}
      </div>
      <div className={(main2 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap2}
      </div>
      <div className={(main3 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap3}
      </div>
      <div className={(main4 ? "EduDetail-click" : "EduDetail-click-off")}>
        {contentsMap4}
      </div>

    </>
  );

};

export default EduDetailContents;
