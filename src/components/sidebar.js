import React, { useState } from "react";
import logoImage from "../assets/images/Logo.png";
import search from "../assets/images/Icon=tabler-icon-search.svg";
import "./components.css";
import { bottomTiles, sideBarTiles } from "../data";
import profile from "../assets/images/Avatar.png";
import menu from "../assets/images/menu.svg";
import panelClose from "../assets/images/panel-right-close.svg";
import panelOpen from "../assets/images/panel-right-open.svg";
import mobileLogo from "../assets/images/mobile-logo.svg";

const Sidebar = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isPanelOpen, setPanelOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const togglePannel = () => {
    setPanelOpen(!isPanelOpen);
  };

  return (
    <>
      <div
        className={`sidebar-container-mobile ${
          isSidebarCollapsed ? "collapsed" : ""
        }`}
      >
        <div>
          <div className="image-logo-mobile">
            <img src={logoImage} alt="logo" className="image logo-image" />
            <img
              src={menu}
              alt="logo"
              className="image menuimage"
              onClick={toggleSidebar}
            />
          </div>
          <div className="sidebar-small-containers1">
            <div className="search-container">
              <input
                type="input"
                className="search-input"
                placeholder="Search"
              />
              <img src={search} alt="search" className="image search-image" />
            </div>
            <div>
              {sideBarTiles?.map((i, n) => {
                return (
                  <div className="tiles-accordian" key={n}>
                    <div className="tile-container">
                      <img
                        src={i?.icon}
                        alt={i?.name}
                        className="image tile-image"
                      />
                      <p className="tile-name">{i?.title}</p>
                    </div>
                    {i && i?.icon2 ? (
                      <img
                        src={i?.icon2}
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
        </div>
        <div className="sidebar-small-containers1">
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
                    src={i?.icon}
                    alt={i?.name}
                    className="image tile-image"
                  />
                  <p
                    className={
                      i?.title === "Log out" ? "tile-name logout" : "tile-name"
                    }
                  >
                    {i?.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div
          className={`sidebar-container ${
            isPanelOpen ? "pannelcollapsed" : ""
          }`}
        >
          {isPanelOpen ? (
            <div className="sidebar-small-containers2 mobile-panel">
              <img
                src={mobileLogo}
                alt="logo"
                className="image mobile-logo-image"
              />
              <img
                src={search}
                alt="search"
                className="image search-image-mobile"
              />
              {sideBarTiles?.map((i, n) => {
                return (
                  <img
                    key={n}
                    src={i?.icon}
                    alt={i?.name}
                    className="image image-mobile"
                  />
                );
              })}
            </div>
          ) : (
            <>
              <div className="sidebar-small-containers2">
                <img src={logoImage} alt="logo" className="image logo-image" />
                <div className="search-container">
                  <input
                    type="input"
                    className="search-input"
                    placeholder="Search"
                  />
                  <img
                    src={search}
                    alt="search"
                    className="image search-image"
                  />
                </div>
                <div>
                  {sideBarTiles?.map((i, n) => {
                    return (
                      <div className="tiles-accordian" key={n}>
                        <div className="tile-container">
                          <img
                            src={i?.icon}
                            alt={i?.name}
                            className="image tile-image"
                          />
                          <p className="tile-name">{i?.title}</p>
                        </div>
                        {i && i?.icon2 ? (
                          <img
                            src={i?.icon2}
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
              <div className="sidebar-small-containers2">
                <div className="tile-container">
                  <img
                    src={profile}
                    alt="profile"
                    className="image profile-image"
                  />
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
                          src={i?.icon}
                          alt={i?.name}
                          className="image tile-image"
                        />
                        <p
                          className={
                            i?.title === "Log out"
                              ? "tile-name logout"
                              : "tile-name"
                          }
                        >
                          {i?.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <img
          src={isPanelOpen ? panelOpen : panelClose}
          alt="logo"
          className="image menuimage2"
          onClick={togglePannel}
        />
      </div>
    </>
  );
};

export default Sidebar;
