import React from "react";
import AlbumGrid from "@/components/AlbumGrid/AlbumGrid";
import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <AlbumGrid />
      <div className={styles.overlay}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
