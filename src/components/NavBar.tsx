import React, { useReducer } from "react";
import "../css/navbar.css";
import { trailerData } from "../data/trailer";
import { backgrounds } from "../data/backgroundData";

const NavBar = ({ menuNavBar }: { menuNavBar: boolean }) => {
  const [backgroundBtn, toggleBackgroundBtn] = useReducer(
    (backgroundBtn) => !backgroundBtn,
    true
  );
  const [trailerBtn, toggleTrailerBtn] = useReducer(
    (trailerBtn) => !trailerBtn,
    false
  );

  const handleBackgroundBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleBackgroundBtn();
    toggleTrailerBtn();
  };

  const handleTrailerBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleBackgroundBtn();
    toggleTrailerBtn();
  };
  return (
    <div
      style={{
        animation: menuNavBar
          ? "slideIn 0.3s forwards"
          : "slideOut 0.3s forwards",
      }}
      className="navBar-container"
    >
      <div className="navbar-options-container">
        <button
          style={{
            backgroundColor: backgroundBtn ? "white" : "transparent",
            color: backgroundBtn ? "black" : "white",
          }}
          onClick={
            backgroundBtn ? (e) => e.preventDefault() : handleBackgroundBtn
          }
        >
          Background
        </button>
        <button
          style={{
            backgroundColor: trailerBtn ? "white" : "transparent",
            color: trailerBtn ? "black" : "white",
          }}
          onClick={trailerBtn ? (e) => e.preventDefault() : handleTrailerBtn}
        >
          Trailers
        </button>
      </div>
      <div className="options-wrapper">
        {backgroundBtn ? (
          <div className="background-wrapper">
            {backgrounds.map((bg) => {
              return (
                <ul key={bg.id}>
                  <li
                    onClick={() =>
                      bg.background_img
                        ? (document.body.style.backgroundImage = `url(${bg.background_img})`)
                        : (document.body.style.background = "")
                    }
                  >
                    {bg.name}
                  </li>
                </ul>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {trailerBtn ? (
          <div className="trailers-wrapper">
            {trailerData
              .map((trailer) => {
                return (
                  <a href={trailer.link} target="_blank">
                    <div className="trailer-box">
                      <img src={trailer.img} alt="" />
                      <div className="trailer-text-box">
                        <h3>{trailer.name}</h3>
                        <p>{trailer.release_date}</p>
                      </div>
                    </div>
                  </a>
                );
              })
              .reverse()}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
