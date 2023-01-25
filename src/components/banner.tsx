import React from "react";
import { Link } from "react-router-dom";
import { LOCALSTORAGE_TOKEN } from "./../constants";
import { ReactComponent as HomeIcon } from "../images/homeicon.svg";

interface Banner {
  routeName1?: string;
  routeName2?: string;
  routeDot1?: string;
  routeDot2?: string;
  route1Opacity?: number;
  route2Opacity?: number;
  route1?:string;
  route2?:string;
  title: string;
  subtitle: string;
  content: string;
  contentBottom?: string;
  contentClass: string;
  contentsImg?: string;
  rightImg?: string;
}

export const Banner: React.FC<Banner> = ({
  routeName1,
  routeName2,
  routeDot1,
  routeDot2,
  route1Opacity,
  route2Opacity,
  route1,
  route2,
  title,
  subtitle,
  content,
  contentBottom,
  contentClass,
  contentsImg,
  rightImg,
}) => (
  <div className="Banner-container">
    <div className="Banner-content-container">
      <div className="Banner-contents">
        <div className="Banner-route-container">
          <Link to="/">
            <HomeIcon className="Banner-route"/>
          </Link>
          <p className="Banner-route-font" style={{opacity: `${route1Opacity}`}}>{routeDot1}</p>
          <Link to={`${route1}`}>
            <p className="Banner-route-font" style={{opacity: `${route1Opacity}`}}>{routeName1}</p>
          </Link>
          <p className="Banner-route-font" style={{opacity: `${route2Opacity}`}}>{routeDot2}</p>
          <Link to={`${route2}`}>
            <p className="Banner-route-font" style={{opacity: `${route2Opacity}`}}>{routeName2}</p>
          </Link>
        </div>
        <div className="Banner-title-div">
          <span className="Banner-title Headline-2">{title}</span>
          <span className="Banner-subtitle Body-1">{subtitle}</span>
        </div>
        <p className={`${contentClass}`}>
          {content}
          <br />
          {contentBottom}
        </p>
      </div>
      <img
        src={contentsImg}
        style={{ display: `${rightImg}` }}
        alt="contentsImg"
        className="Banner-rightImg"
      />
    </div>
  </div>
);


