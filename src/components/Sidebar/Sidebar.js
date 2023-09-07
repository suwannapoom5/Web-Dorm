import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";

import logo from "HoPak.png";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  const [openMenu, setOpenMenu] = useState(null); // State เพื่อเก็บเมนูที่เปิดอยู่

  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const toggleMenu = (index) => {
    if (openMenu === index) {
      // ถ้าคลิกเมนูที่กำลังเปิดอยู่ ให้ปิดเมนู
      setOpenMenu(null);
    } else {
      // ถ้าคลิกเมนูที่ยังไม่เปิด ให้เปิดเมนู
      setOpenMenu(index);
    }
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
            const isDropdownOpen = key === openMenu;

            return (
              <li
                className={`${
                  activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                } ${isDropdownOpen ? "open" : ""}`}
                key={key}
              >
                {prop.dropdown ? (
                  <a href="#!" onClick={() => toggleMenu(key)}>
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </a>
                ) : (
                  <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                )}
                {isDropdownOpen && prop.dropdown && (
                  <ul className="submenu">
                    {prop.dropdown.map((subItem, subKey) => (
                      <li key={subKey}>
                        <NavLink
                          to={subItem.layout + subItem.path}
                          className={`${
                            activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                          } ${isDropdownOpen ? "open" : ""}`}
                          key={key}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;