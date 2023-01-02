import React from "react";

interface KitPicture {
  title: string;
  titleMarginTop: number;
  imgSrc1?: string;
  imgSrc2?: string;
  gridTemplateColumns1: number;
  gridTemplateColumns2: number;
}

export const KitPicture: React.FC<KitPicture> = ({
  title,
  titleMarginTop,
  imgSrc1,
  imgSrc2,
  gridTemplateColumns1,
  gridTemplateColumns2,
}) => (
  <>
    <div className="Body" style={{ marginTop: `${titleMarginTop}rem` }}>
      <div className="EduTable-container">
        <div className="EduDetailContents-title-box">
          <p className="EduDetailContents-title">{title}</p>
        </div>
      </div>
      <div
        className="KitPicture-container"
        style={{
          gridTemplateColumns: `${gridTemplateColumns1}rem ${gridTemplateColumns2}rem`,
        }}
      >
        <img src={imgSrc1} />
        <img src={imgSrc2} />
      </div>
    </div>
  </>
);
