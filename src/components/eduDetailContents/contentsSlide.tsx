import React, { useRef, useState, useEffect } from "react";

import { ReactComponent as PrevBtn } from "../../images/prev_button.svg";
import { ReactComponent as NextBtn } from "../../images/next_button.svg";

interface ContentsSlide {
  title: string;
  titleMarginTop: number;
  imgSrc1?: string;
  imgSrc2?: string;
  imgSrc3?: string;
  imgSrc4?: string;
  imgSrc5?: string;
}

export function ContentsSlide(props: ContentsSlide) {
  const images = useRef([
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);

  const moveSlide = (i: number) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <>
      <div className="Body" style={{ marginTop: `${props.titleMarginTop}rem` }}>
        <div className="EduTable-container">
          <div className="EduDetailContents-title-box">
            <p className="EduDetailContents-title">{props.title}</p>
          </div>
        </div>
        <div className="ContentsSlide-container">
          <div className="container">
            <div className="position">
              {images.current.map((x, i) => (
                <div
                  key={i}
                  className={i === current ? "dot current" : "dot"}
                ></div>
              ))}
            </div>
            <div className="slide">
              <PrevBtn
                className="btn"
                style={{ marginRight: "3.535rem" }}
                onClick={() => {
                  moveSlide(-1);
                }}
              />
              <div className="window">
                <div className="flexbox" style={style}>
                  <img src={props.imgSrc1} className="img" />
                  <img src={props.imgSrc2} className="img" />
                  <img src={props.imgSrc3} className="img" />
                  <img src={props.imgSrc4} className="img" />
                  <img src={props.imgSrc5} className="img" />
                </div>
              </div>
              <NextBtn
                className="btn"
                style={{ marginLeft: "3.535rem" }}
                onClick={() => {
                  moveSlide(1);
                }}
              />
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </div>
    </>
  );
=======
        </>
    );
>>>>>>> feature_branch
}
