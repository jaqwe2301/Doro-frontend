import React from "react";

interface Notice {
    title:string;
    titleMarginTop : number;
    contentsText1?: string;
    contentsText2?: string;
    contentsText3?: string;
    contentsText4?: string;
    contentsText5?: string;
    contentsText6?: string;
}

export const Notice: React.FC<Notice> = ({
    title,
    titleMarginTop,
    contentsText1,
    contentsText2,
    contentsText3,
    contentsText4,
    contentsText5,
    contentsText6,
}) => (
    <>
        <div className="Body" style={{ marginTop: `${titleMarginTop}rem`}}>
            <div className="EduTabble-container">
                <div className="EduDetailContents-title-box">
                    <p className="EduDetailContents-title">{title}</p>
                </div>
            </div>
            <div className="Notice-container">
                <p>{contentsText1}</p>
                <p>{contentsText2}</p>
                <p>{contentsText3}</p>
                <p>{contentsText4}</p>
                <p>{contentsText5}</p>
                <p>{contentsText6}</p>
            </div>
        </div>
    </>
);