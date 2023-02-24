import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

function Header() {
  const [sideBar, setSideBar] = useState(false);

  const ToggleSideBar = () => {
    setSideBar(!sideBar);
  };
  console.log(sideBar);

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.left}>
          <Link to="/" className={styles.HeaderLink}>
            <div className={styles.container}>
              <img
                className={styles.logo}
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
                alt="Unstop Logo"
                width={82}
                height={32}
              />
              <span className={styles.logospan}>
                Formerly
                <strong style={{ fontSize: "12px" }}>Dare2Compete</strong>
              </span>
            </div>
          </Link>
          <SearchBox />
        </div>
        <div className={styles.right}>
          <div className={styles.IconContainer}>
            <Link className={styles.Link} to="/courses">
              <div className={`${styles.icon}`}>
                <em className={`${styles.m_icons} ${styles.icon_learn}`}></em>
                Learn
              </div>
            </Link>
            <Link className={styles.Link} to="/practice">
              <div className={`${styles.icon}`}>
                <em
                  className={`${styles.m_icons} ${styles.icon_practice}`}
                ></em>
                Practice
              </div>
            </Link>
            <Link className={styles.Link} to="/compete">
              <div className={`${styles.icon}`}>
                <em className={`${styles.m_icons} ${styles.icon_compete}`}></em>
                Compete
              </div>
            </Link>
            <div className={`${styles.icon}`}>
              <em
                className={`${styles.m_icons} ${styles.icon_mentorship}`}
              ></em>
              Mentorship
            </div>
            <div className={`${styles.icon}`}>
              <em className={`${styles.m_icons} ${styles.icon_jobs}`}></em>
              Jobs
            </div>
          </div>
          <div className={styles.fixedButtons}>
            <div className={`${styles.host_btn} ${styles.waves_effect}`}>
              <img
                src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-icon.svg"
                alt=""
                width={15}
                height={15}
                style={{ marginRight: "6px" }}
              />
              Host
            </div>
            <div className={`${styles.login_btn} ${styles.waves_effect}`}>
              Login
              <img
                src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                alt=""
                width={15}
                height={15}
                className={styles.login_img}
              />
            </div>
            <div
              className={`${styles.menu_icon} ${styles.all_menu}`}
              onClick={ToggleSideBar}
            >
              <img
                src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg"
                alt="Hamburger Icon"
                height={18}
                width={19}
              />
            </div>
          </div>
        </div>
      </div>
      {sideBar && <SideBar sideBarState={ToggleSideBar} />}
    </div>
  );
}

export default Header;
