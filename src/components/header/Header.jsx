import React from "react";
import "./header.css";
import ME from "../../assets/ME2.png";
import CTA from "./CTA.jsx";
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header_container">
          <div className="me">
            <img src={ME} alt="me" />
            <CTA />
          </div>
         {/*  <div id="sectionScrollDown" className="scroll_down">
            <a href="#contact" className="scrDown">
              <span></span>Scroll Down
            </a>
          </div>*/}
        </div>
        <HeaderSocials />
      </header>
    </section>
  );
};

export default Header;
