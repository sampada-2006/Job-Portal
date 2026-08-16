import { FiSearch, FiMapPin } from "react-icons/fi";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Left side */}
          <div className={styles.heroText}>
            <h1>Find Your Dream Job</h1>

            <p>
              Discover thousands of opportunities from top companies around the
              world.
            </p>

            {/* Search box */}
            <div className={styles.searchBox}>
              <div className={styles.inputGroup}>
                <FiSearch />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                />
              </div>

              <div className={styles.inputGroup}>
                <FiMapPin />
                <input type="text" placeholder="Location" />
              </div>
              <button className={styles.searchButton}>Search</button>
            </div>

            {/* Filters */}
            <div className={styles.filters}>
              <span>Remote</span>
              <span>Full-Time</span>
              <span>Senior Level</span>
            </div>
          </div>

          {/* Right side */}
          <div className={styles.heroImage}>
            <img
              src="/hero-illustration.jpg"
              alt="Professionals working together"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
