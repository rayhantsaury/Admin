import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerTitles">
          <span className="headerTitleSm">ADMIN</span>
          <span className="headerTitleLg">FC Omicron</span>
        </div>
        <div className="headerImg"></div>
      </div>
    </div>
  );
}
