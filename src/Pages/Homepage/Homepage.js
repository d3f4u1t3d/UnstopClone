import React from "react";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className={styles.Header}>
          <div className={styles.HeroContainer}>
            <div className={styles.HeroText}>
              <h1 className={styles.HeroH1}>
                <span className={styles.HeroSpan}>Connecting</span>
                <br />
                Talent, Colleges, Recruiters
              </h1>
              <p className={styles.HeroP}>
                Explore opportunities from across the globe to learn, showcase
                skills, gain CV points, & get hired by your dream company.
              </p>
            </div>
            <div className={styles.HeroGrid}>
              <Link to="/courses">
                <div className={styles.GridImg}>
                  <img
                    className={styles.grid_img}
                    src="https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406"
                    alt="Learn"
                    width={162}
                    height={203}
                  />
                  <span className={styles.grid_span}>Learn</span>
                </div>
              </Link>
              <Link to="/practice">
                <div className={styles.GridImg}>
                  <img
                    className={styles.grid_img}
                    src="https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406"
                    alt="Practice"
                    width={162}
                    height={203}
                  />
                  <span className={styles.grid_span}>Practice</span>
                </div>
              </Link>

              <div className={styles.GridImg}>
                <img
                  className={styles.grid_img}
                  src="https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406"
                  alt="MentorShip"
                  width={162}
                  height={203}
                />
                <span className={styles.grid_span}>Mentorships</span>
              </div>
              <Link to="/compete">
                <div className={styles.GridImg}>
                  <img
                    className={styles.grid_img}
                    src="https://cdn.unstop.com/uploads/images/home/home-hero-compete.png?d=324x406"
                    alt="Compete"
                    width={162}
                    height={203}
                  />
                  <span className={styles.grid_span}>Compete</span>
                </div>
              </Link>
              <div className={styles.GridImg}>
                <img
                  className={styles.grid_img}
                  src="https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406"
                  alt="MentorShip"
                  width={162}
                  height={203}
                />
                <span className={styles.grid_span}>Jobs</span>
              </div>
              <div className={styles.GridImg}>
                <img
                  className={styles.grid_img}
                  src="https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406"
                  alt="MentorShip"
                  width={162}
                  height={203}
                />
                <span className={styles.grid_span}>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.carousel_aligner}>
        <div className={styles.carousel_container}>
          <h2 className={styles.carousel_text}>
            Industry veterans
            <span className={styles.carousel_span}>trust us:</span>
          </h2>
          <div className={styles.carousel}></div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
