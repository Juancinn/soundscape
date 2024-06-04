"use client";

import React, { useState } from "react";
import Link from "next/link";
import useStore from "@/contexts/Store";
import styles from "./Header.module.css";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";

const Header = () => {
  const { user, isAuthenticated, logout } = useStore();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
  };

  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          <Image
            src="/logo.png"
            alt="SoundScape Logo"
            width={200}
            height={75}
          />
        </a>
      </Link>
      <nav className="space-x-6 flex text-lg">
        {["Artists", "Tracks", "Listen to this"].map((item, index) => (
          <NavItem
            key={index}
            href={`/${item.toLowerCase().replace(/ /g, "-")}`}
          >
            {item}
          </NavItem>
        ))}
        {isAuthenticated ? (
          <div className={styles.userMenu}>
            <span onClick={() => setDropdownVisible(!dropdownVisible)}>
              {user?.username} <span className="arrow-down">&#9660;</span>
            </span>
            {dropdownVisible && (
              <div className={styles.dropdown}>
                <Link href="/profile" legacyBehavior>
                  <a className={styles.dropdownItem}>Profile</a>
                </Link>
                <button onClick={handleLogout} className={styles.dropdownItem}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" legacyBehavior>
            <a className={styles.button}>Log In</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.navLink}>{children}</a>
    </Link>
  );
};

export default Header;
