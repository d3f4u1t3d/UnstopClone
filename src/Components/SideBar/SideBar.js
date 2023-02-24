import React from "react";
import styles from "./SideBar.module.css";

function SideBar(props) {
  return (
    <>
      <div className={styles.SideBar}>
        <div className={styles.SideBar_title}>
          <span>Menu</span>
          <em
            className={`material-icons ${styles.cursor_pointer}`}
            onClick={props.sideBarState}
          >
            close
          </em>
        </div>
        <div className={`${styles.host_events} ${styles.waves_effect}`}>
          Host Events
        </div>
        <div className={styles.list_container}>
          <ul className={styles.list}>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_employer}`}
                ></em>
                For Employers
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_solution}`}
                ></em>
                Our Solutions
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_product}`}></em>
                Our Products
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_clientele}`}
                ></em>
                Clientele
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_case}`}></em>
                Case Studies
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_pricing}`}></em>
                Pricing
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_contact_us}`}
                ></em>
                Contact Us
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_unstop_awards}`}
                ></em>
                Unstop Awards 2023
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_oqf}`}></em>
                Online Quizzing Festival
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_ohf}`}></em>
                Online Hackathon Festival
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_partner_with_us}`}
                ></em>
                Partner With Us
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_partners}`}
                ></em>
                Partners
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_testimonials}`}
                ></em>
                Testimonials
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_about_us}`}
                ></em>
                About Us
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_carrers}`}></em>
                Carrers
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em className={`${styles.g_icons} ${styles.icon_faq}`}></em>
                FAQ
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_terms_of_use}`}
                ></em>
                Terms & Conditions
              </div>
            </li>
            <li>
              <div className={styles.list_specs}>
                <em
                  className={`${styles.g_icons} ${styles.icon_privacy_policy}`}
                ></em>
                Privacy Policy
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
