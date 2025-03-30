"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { ChartBar } from "phosphor-react";
import { NavbarProps } from "./Navbar.types";

export default function Navbar({ breadcrumbs }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <ChartBar size={24} weight="regular" />
      <div className={styles.navbar_breadcrumbs}>
        {breadcrumbs.map((breadcrumb) => (
          <div key={breadcrumb.label}>{breadcrumb.label}</div>
        ))}
      </div>
    </nav>
  );
}
