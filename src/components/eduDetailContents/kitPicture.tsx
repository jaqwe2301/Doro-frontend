import React from "react";

interface KitPicture {
    title:string;
    titleMarginTop : number;
    imgSrc1: string;
    imgSrc2: string;
}

export const KitPicture: React.FC<KitPicture> = ({
    title,
    titleMarginTop,
    imgSrc1,
    imgSrc2,
}) => (
    <>
        <div className="Body" style={{ marginTop: `${titleMarginTop}rem`}}>
            <div className="EduTabble-container">
                <div className="EduDetailContents-title-box">
                    <p className="EduDetailContents-title">{title}</p>
                </div>
            </div>
            <div className="KitPicture-container">
                    <img src={imgSrc1}/>
                    <img src={imgSrc2}/>
            </div>
        </div>
    </>
);