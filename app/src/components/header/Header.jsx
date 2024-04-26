import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import logo1 from "../../assets/bitstream-transparent.svg";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else if (type === "tv") {
      navigate("/explore/tv");
    } else {
      navigate("/register");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo1} alt="" />
        </div>
        <ul className="menuItems">
          <li>
            {isAuthenticated && (
              <li className="menuItem">
                <HiOutlineSearch onClick={openSearch} />
              </li>
            )}
          </li>
          <li>
            {isAuthenticated && (
              <li
                className="menuItem"
                onClick={() => navigationHandler("movie")}>
                Movies
              </li>
            )}
          </li>
          <li>
            {isAuthenticated && (
              <li className="menuItem" onClick={() => navigationHandler("tv")}>
                TV Shows
              </li>
            )}
          </li>
          {/* <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li> */}
            <li>
            {isAuthenticated && (
              <div>
                <p className="menuItem">{user.nickname}</p>
                {/* <p className="menuItem">{user.email}</p> */}
              </div>
            )}
          </li>
          {isAuthenticated ? (
            <li>
              <li
                className="menuItem"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }>
                Log out
              </li>
            </li>
          ) : (
            <li className="menuItem" onClick={() => loginWithRedirect()}>
              Login / Register
            </li>
          )}
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
