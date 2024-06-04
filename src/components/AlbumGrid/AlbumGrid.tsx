import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AlbumGrid.module.css";

const albums = [
  { name: "A Love Supreme", image: "/images/a-love-supreme.webp" },
  { name: "Abbey Road", image: "/images/abbey-road.webp" },
  {
    name: "Black Saint Sinner Lady",
    image: "/images/black-saint-sinner-lady.webp",
  },
  { name: "Crimson King", image: "/images/crimson-king.webp" },
  { name: "GKMC", image: "/images/gkmc.webp" },
  { name: "Illmatic", image: "/images/illmatic.webp" },
  { name: "In Rainbows", image: "/images/in-rainbows.webp" },
  { name: "Kid A", image: "/images/kid-a.webp" },
  { name: "Lift Yr", image: "/images/lift-yr.webp" },
  { name: "Loveless", image: "/images/loveless.webp" },
  { name: "Madvillainy", image: "/images/madvillainy.webp" },
  { name: "Ok Computer", image: "/images/ok-computer.webp" },
  { name: "Remain in Light", image: "/images/remain-in-light.webp" },
  { name: "Revolver", image: "/images/revolver.webp" },
  { name: "TDSOTM", image: "/images/tdsotm.webp" },
  {
    name: "The Velvet Underground",
    image: "/images/the-velvet-underground.webp",
  },
  { name: "TPAB", image: "/images/tpab.webp" },
  { name: "Vespertine", image: "/images/vespertine.webp" },
  { name: "Wish You Were Here", image: "/images/wish-you-were-here.webp" },
  { name: "Ziggy Stardust", image: "/images/ziggy-stardust.webp" },
];

const AlbumGrid = () => {
  const [row1, setRow1] = useState(albums.slice(0, 6));
  const [row2, setRow2] = useState(albums.slice(6, 12));
  const [row3, setRow3] = useState(albums.slice(12, 18));

  useEffect(() => {
    const updateRows = () => {
      setRow1((prev) => {
        const next = albums[(albums.indexOf(prev[0]) + 6) % albums.length];
        return [...prev.slice(1), next];
      });

      setRow2((prev) => {
        const next = albums[(albums.indexOf(prev[0]) + 6) % albums.length];
        return [...prev.slice(1), next];
      });

      setRow3((prev) => {
        const next = albums[(albums.indexOf(prev[0]) + 6) % albums.length];
        return [...prev.slice(1), next];
      });
    };

    const interval = setInterval(updateRows, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.albumGridContainer}>
      <div className={styles.albumGridRow}>
        {row1.map((album, index) => (
          <div key={index} className={styles.albumItem}>
            <Image
              src={album.image}
              alt={album.name}
              layout="fill"
              objectFit="cover"
              className={styles.albumImage}
            />
          </div>
        ))}
      </div>
      <div className={styles.albumGridRow}>
        {row2.map((album, index) => (
          <div key={index} className={styles.albumItem}>
            <Image
              src={album.image}
              alt={album.name}
              layout="fill"
              objectFit="cover"
              className={styles.albumImage}
            />
          </div>
        ))}
      </div>
      <div className={styles.albumGridRow}>
        {row3.map((album, index) => (
          <div key={index} className={styles.albumItem}>
            <Image
              src={album.image}
              alt={album.name}
              layout="fill"
              objectFit="cover"
              className={styles.albumImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
