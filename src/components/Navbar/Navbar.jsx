import { NavLink } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <NavLink to="/" className={styles.logo}>
            <FiBriefcase className={styles.logoIcon} />
            <span>Nexus Jobs</span>
          </NavLink>

          {/* Navigation Links */}
          <nav className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Jobs
            </NavLink>

            <NavLink
              to="/saved"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Saved Jobs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              About
            </NavLink>
          </nav>

          {/* Right side buttons */}
          <div className={styles.actions}>
            <button className={styles.loginButton}>Login</button>

            <button className={styles.signupButton}>Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
