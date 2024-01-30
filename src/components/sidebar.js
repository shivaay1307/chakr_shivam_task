import React from "react";
import logoImage from "../assets/images/Logo.png";
import search from "../assets/images/Icon=tabler-icon-search.svg";
import "./components.css";
import { bottomTiles, sideBarTiles } from "../data";
import profile from "../assets/images/Avatar.png";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
        <div className="sidebar-small-containers">
          <img src={logoImage} alt="logo" className="image logo-image" />
          <div className="search-container">
            <input type="input" className="search-input" placeholder="Search" />
            <img src={search} alt="search" className="image search-image" />
          </div>
          <div>
            {sideBarTiles?.map((i, n) => {
              return (
                <div className="tiles-accordian" key={n}>
                  <div className="tile-container">
                    <img
                      src={i?.icon[i?.name]}
                      alt={i?.name}
                      className="image tile-image"
                    />
                    <p className="tile-name">{i?.title}</p>
                  </div>
                  {i && i?.icon2 ? (
                    <img
                      src={i?.icon2[i?.name2]}
                      alt={i?.name2}
                      className="image tile-image2"
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="sidebar-small-containers">
          <div className="tile-container">
            <img src={profile} alt="profile" className="image profile-image" />
            <div className="profile-names">
              <p className="profile-name">Gustavo Xavier</p>
              <p>Admin</p>
            </div>
          </div>
          {bottomTiles?.map((i, n) => {
              return (
                <div className="tiles-accordian" key={n}>
                  <div className="tile-container">
                    <img
                      src={i?.icon[i?.name]}
                      alt={i?.name}
                      className="image tile-image"
                    />
                    <p className={i?.title === "Log out" ? "tile-name logout" : "tile-name" }>{i?.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
}

export default Sidebar;
