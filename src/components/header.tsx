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
              <li>
                <Link to="/applyEdu" className="Header-link-inquiry">
                  교육 신청
                </Link>
              </li>
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
  );
};
