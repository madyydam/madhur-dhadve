import React from "react";
import styles from "../styles/FutoraPayCard.module.css";
import futoraLogo from "../assets/futorapay-logo.jpg";

type Props = {
  title?: string;
  description?: string;
  url?: string;
};

export default function FutoraPayCard({
  title = "FutoraPay",
  description = "A payment & billing dashboard (short description).",
  url = "#",
}: Props) {
  return (
    <a className={styles.card} href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.logoWrap}>
        <img src={futoraLogo} alt={`${title} logo`} className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
