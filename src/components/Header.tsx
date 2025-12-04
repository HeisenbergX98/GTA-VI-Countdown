import "../css/header.css";
import IconLogo from "../assets/logo-white.png";
import Logo from "../assets/logo.webp";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuNavBar, toggleMenuNavBar] = useState<boolean>(false);
  const [isNavBarRendered, setIsNavBarRendered] = useState<boolean>(false);

  useEffect(() => {
    if (menuNavBar) {
      // If the menu opens, render the NavBar immediately.
      setIsNavBarRendered(true);
    } else {
      // If the menu closes, wait for the animation to finish before unmounting.
      const timer = setTimeout(() => {
        setIsNavBarRendered(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [menuNavBar]);

  const toggleMenu = () => {
    toggleMenuNavBar((prev) => !prev);
  };

  return (
    <div className="header-container">
      <div className="logo-icon-wrapper">
        <img src={IconLogo} alt="Logo GTA VI" />
      </div>
      <div className="logo-wrapper">
        <img src={Logo} alt="Logo GTA VI" />
      </div>
      <div className="navbar-wrapper">
        {menuNavBar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#FFFFFF"
            onClick={toggleMenu}
            className="navbar-close-svg"
          >
            <path d="m300-258-42-42 180-180-180-179 42-42 180 180 179-180 42 42-180 179 180 180-42 42-179-180-180 180Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="53px"
            viewBox="0 -960 960 960"
            width="53px"
            fill="#FFFFFF"
            onClick={toggleMenu}
          >
            <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z" />
          </svg>
        )}
      </div>
      {isNavBarRendered ? <NavBar menuNavBar={menuNavBar} /> : null}
    </div>
  );
};

export default Header;
