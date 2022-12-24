import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import doroLogo from "../images/logo.png";

export const Header: React.FC = () => {
  return (
    <>
      <header className="Header-header">
        <div className="Header-container">
          <Link to="/" className="Header-logo">
            <img src={doroLogo} className="Header-logo" alt="Doro" />
          </Link>
          <div>
            <ul className="flex flex-row bg-white">
              {/* <li>
                <Link to="/createPost" className="Header-link-inquiry">
                  교육문의
                </Link>
              </li> */}
              <li>
                <Link to="/showDetailContent" className="Header-link-inquiry">
                  교육 콘텐츠
                </Link>
              </li>
              {/* <li>
                <Link to="/applyNewEducation" className="Header-link-inquiry">
                  교육 신청
                </Link>
              </li> */}
              <li>
                <Link
                  to="/posts"
                  className="Header-link-community hover:font-bold"
                  aria-current="page"
                >
                  문의게시판
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
    // <>
    //   <header className="Header-header">
    //     <div className="Header-container">
    //       <div className="Header-logo-frame">
    //         <Link to="/">
    //           <img src={doroLogo} alt="Doro" />
    //         </Link>
    //       </div>
    //       <div className="Header-link-container">
    //         <Link
    //           to="/posts"
    //           className="Header-education-inquiry"
    //           aria-current="page"
    //         >
    //           커뮤니티
    //         </Link>
    //         <Link to="/createPost" className="Header-board">
    //           교육문의
    //         </Link>
    //       </div>
    //     </div>
    //   </header>
    // </>
  );
};
