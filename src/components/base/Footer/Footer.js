import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../utils/constants/routes";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} to={ROUTES.ROOT}>
        Contact
      </Link>
      <Link className={styles.link} to={ROUTES.ROOT}>
        Privacy
      </Link>
      <Link className={styles.link} to={ROUTES.ROOT}>
        Terms
      </Link>
    </footer>
  );
};

export default Footer;