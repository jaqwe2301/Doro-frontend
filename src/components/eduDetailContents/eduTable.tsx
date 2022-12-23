import React from "react";

interface EduTable {
    title : string;
    titleMarginTop : number;
    tabletitle1 : string;
    tabletitle2 : string;
    tabletitle3 : string;
    contents1_1? : string;
    contents1_2? : string;
    contents1_3? : string;
    contents2_1? : string;
    contents2_2? : string;
    contents2_3? : string;
    contents3_1? : string;
    contents3_2? : string;
    contents3_3? : string;
    liClass1? : string;
    liClass2? : string;
    liClass3? : string;
}

export const EduTable: React.FC<EduTable> = ({
    title,
    titleMarginTop,
    tabletitle1,
    tabletitle2,
    tabletitle3,
    contents1_1,
    contents1_2,
    contents1_3,
    contents2_1,
    contents2_2,
    contents2_3,
    contents3_1,
    contents3_2,
    contents3_3,
    liClass1,
    liClass2,
    liClass3,
}) => (
    <>
        <div className="Body" style={{ marginTop: `${titleMarginTop}rem`}}>
            <div className="EduTabble-container">
                <div className="EduDetailContents-title-box">
                    <p className="EduDetailContents-title">{title}</p>
                </div>
            </div>
        
            <table className="EduTabble-table">
                <tr>
                    <th>{tabletitle1}</th>
                    <td>
                        <ul>
                            <li className={`${liClass1}`}>{contents1_1}</li>
                            <li className={`${liClass1}`}>{contents1_2}</li>
                            <li className={`${liClass1}`}>{contents1_3}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>{tabletitle2}</th>
                    <td>
                        <ul>
                            <li className={`${liClass2}`}>{contents2_1}</li>
                            <li className={`${liClass2}`}>{contents2_2}</li>
                            <li className={`${liClass2}`}>{contents2_3}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>{tabletitle3}</th>
                    <td>
                        <ul>
                            <li className={`${liClass3}`}>{contents3_1}</li>
                            <li className={`${liClass3}`}>{contents3_2}</li>
                            <li className={`${liClass3}`}>{contents3_3}</li>
                        </ul>
                    </td>
                </tr>
            </table>

        </div>
    </>


);