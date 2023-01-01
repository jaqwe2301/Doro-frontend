import React from "react";

interface EduTable {
  title: string;
  titleMarginTop: number;
  tabletitle1: string;
  tabletitle2: string;
  tabletitle3: string;

  contents1_1?: string;
  contents1_2?: string;
  contents1_3?: string;
  contents1_4?: string;
  contents1_5?: string;

  contents2_1?: string;
  contents2_2?: string;
  contents2_3?: string;
  contents2_4?: string;
  contents2_5?: string;
  contents2_6?: string;
  contents2_7?: string;
  contents2_8?: string;
  contents2_9?: string;

  contents3_1?: string;
  contents3_2?: string;
  contents3_3?: string;
  contents3_4?: string;
  contents3_5?: string;

  liClass1?: string;

  liClass1_1?: string;
  liClass1_2?: string;
  liClass1_3?: string;
  liClass1_4?: string;
  liClass1_5?: string;

  liClass2?: string;

  liClass2_1?: string;
  liClass2_2?: string;
  liClass2_3?: string;
  liClass2_4?: string;
  liClass2_5?: string;
  liClass2_6?: string;
  liClass2_7?: string;
  liClass2_8?: string;
  liClass2_9?: string;

  liClass3?: string;

  liClass3_1?: string;
  liClass3_2?: string;
  liClass3_3?: string;
  liClass3_4?: string;
  liClass3_5?: string;
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
  contents1_4,
  contents1_5,

  contents2_1,
  contents2_2,
  contents2_3,
  contents2_4,
  contents2_5,
  contents2_6,
  contents2_7,
  contents2_8,
  contents2_9,

  contents3_1,
  contents3_2,
  contents3_3,
  contents3_4,
  contents3_5,

  liClass1,
  liClass1_1,
  liClass1_2,
  liClass1_3,
  liClass1_4,
  liClass1_5,

  liClass2,
  liClass2_1,
  liClass2_2,
  liClass2_3,
  liClass2_4,
  liClass2_5,
  liClass2_6,
  liClass2_7,
  liClass2_8,
  liClass2_9,

  liClass3,
  liClass3_1,
  liClass3_2,
  liClass3_3,
  liClass3_4,
  liClass3_5,
}) => (
  <>
    <div className="Body" style={{ marginTop: `${titleMarginTop}rem` }}>
      <div className="EduTable-container">
        <div className="EduDetailContents-title-box">
          <p className="EduDetailContents-title">{title}</p>
        </div>
      </div>

      <table className="EduTable-table">
        <tr>
          <th>{tabletitle1}</th>
          <td>
            <ul>
              <li className={`${liClass1_1}, ${liClass1}`}>{contents1_1}</li>
              <li className={`${liClass1_2}, ${liClass1}`}>{contents1_2}</li>
              <li className={`${liClass1_3}, ${liClass1}`}>{contents1_3}</li>
              <li className={`${liClass1_4}, ${liClass1}`}>{contents1_4}</li>
              <li className={`${liClass1_5}, ${liClass1}`}>{contents1_5}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>{tabletitle2}</th>
          <td>
            <ul>
              <li className={`${liClass2_1}, ${liClass2}`}>{contents2_1}</li>
              <li className={`${liClass2_2}, ${liClass2}`}>{contents2_2}</li>
              <li className={`${liClass2_3}, ${liClass2}`}>{contents2_3}</li>
              <li className={`${liClass2_4}, ${liClass2}`}>{contents2_4}</li>
              <li className={`${liClass2_5}, ${liClass2}`}>{contents2_5}</li>
              <li className={`${liClass2_6}, ${liClass2}`}>{contents2_6}</li>
              <li className={`${liClass2_7}, ${liClass2}`}>{contents2_7}</li>
              <li className={`${liClass2_8}, ${liClass2}`}>{contents2_8}</li>
              <li className={`${liClass2_9}, ${liClass2}`}>{contents2_9}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>{tabletitle3}</th>
          <td>
            <ul>
              <li className={`${liClass3_1}, ${liClass3}`}>{contents3_1}</li>
              <li className={`${liClass3_2}, ${liClass3}`}>{contents3_2}</li>
              <li className={`${liClass3_3}, ${liClass3}`}>{contents3_3}</li>
              <li className={`${liClass3_4}, ${liClass3}`}>{contents3_4}</li>
              <li className={`${liClass3_5}, ${liClass3}`}>{contents3_5}</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </>
);
