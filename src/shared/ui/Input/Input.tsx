import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export default function Input({
  label,
  placeholder,
  type,
  value,
  onChange
}: InputProps) {
  return (
    <div className="w-full">
      <label className={styles.input_container_label}>{label}</label>
      <div className={styles.input_container}>
        <input
          className={styles.input_container_input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
