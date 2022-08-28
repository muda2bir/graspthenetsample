import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <h3 className={styles.title}>GraspTheNet</h3>
              <span>Conquer the Internet</span>
            </div>
          </a>
        </Link>
        <ul className={styles.nav_list}>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li>Blog</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
