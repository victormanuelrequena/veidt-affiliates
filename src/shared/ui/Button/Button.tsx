import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export default function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <button className={styles.button + " " + styles[variant]} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
