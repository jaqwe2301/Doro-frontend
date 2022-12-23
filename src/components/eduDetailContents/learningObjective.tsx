import React from "react";

interface LearningObjective {
    title : string;
    titleMarginTop : number;
    contents1 : string;
    contents2 : string;
}

export const LearningObjective: React.FC<LearningObjective> = ({
    title,
    titleMarginTop,
    contents1,
    contents2,
}) => (
    <>
        <div className="Body" style={{ marginTop: `${titleMarginTop}rem`}}>
            <div className="EduTabble-container">
                <div className="EduDetailContents-title-box">
                    <p className="EduDetailContents-title">{title}</p>
                </div>
            </div>

            <div className="LearningObjective-container" style={{ marginTop: "2.444rem"}}>
                <p className="LearningObjective-content-container">
                    {contents1}
                </p>
                <p className="LearningObjective-content-container">
                    {contents2}
                </p>
            </div>

        </div>
    
    </>
);