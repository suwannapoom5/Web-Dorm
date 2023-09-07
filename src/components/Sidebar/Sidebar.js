import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";

import logo from "HoPak.png";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a className="simple-text logo-mini">
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a className="simple-text logo-normal">HoPak</a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.dropdown) {
              return (
                <li
                  className={
                    activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <a href="#!" onClick={toggleSubmenu}>
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </a>
                  {submenuOpen && (
                    <ul className={`submenu ${submenuOpen ? "open" : ""}`}>
                      {prop.dropdown.map((subItem, subKey) => (
                        <li key={subKey}>
                          <NavLink
                            to={subItem.path}
                            className={`nav-NavLink ${
                              activeRoute(subItem.path) ? "active" : ""
                            }`}
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li
                  className={
                    activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            }
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
