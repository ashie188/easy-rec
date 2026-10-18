import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">
          easy<span>-Rec</span>
        </h1>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Record</a>
          <a href="#">Docs</a>
        </nav>
      </div>
    </header>
  );
}

