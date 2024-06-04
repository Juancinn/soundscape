import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Soundscape, created by Juancin</p>
        <div className={styles.socials}>
          <Link
            href="https://www.instagram.com/juanjomoncayo_"
            legacyBehavior
            passHref
          >
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </Link>
        </div>
        <p>Follow us on Instagram for the latest updates and reviews!</p>
      </div>
    </footer>
  );
};

export default Footer;
