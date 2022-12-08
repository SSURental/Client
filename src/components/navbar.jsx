import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <div className="navbarLeftContainer">
            <div className="logo navbarLogo">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#282828",
                }}
              >
                <div>
                  <span style={{ color: "#68C9D1" }}>SSU</span>
                  <span>RENTAL</span>
                </div>
              </Link>
            </div>
            <ul className="navbarMenu">
              <Link
                to="/rent"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#282828",
                }}
              >
                <li className="navbarMenuItem">대여하기</li>
              </Link>
              <Link
                to="/board"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#282828",
                }}
              >
                <li className="navbarMenuItem">게시판</li>
              </Link>
              <Link
                to="/chat"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#282828",
                }}
              >
                <li className="navbarMenuItem">채팅</li>
              </Link>
            </ul>
          </div>
          <div className="navbarRightContainer">
            <form className="navbarSearch">
              <div className="navbarSearchBox">
                <input type="text" placeholder="검색어를 입력하세요." />
                <button type="submit">
                  <BiSearch color="#68C9D1" size="30px" />
                </button>
              </div>
            </form>
            <ul className="navbarIcons">
              <li className="navbarBellIcon">
                <span>
                  <BsBellFill
                    color="#C2C2C2"
                    size="35px"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </span>
              </li>
              <li className="navbarMypageIcon">
                <Link to="/login">
                  <span>
                    <FaUserCircle
                      color="#C2C2C2"
                      size="35px"
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
