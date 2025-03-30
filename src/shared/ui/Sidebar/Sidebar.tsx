"use client";
import React from "react";
import styles from "./Sidebar.module.css";
import {
  ArrowsLeftRight,
  Bell,
  CaretDown,
  ChartBar,
  Gear,
  Gift,
  Printer,
  SignOut,
  Users
} from "phosphor-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_header}>
        <div className={styles.sidebar_header_logo}>
          <p>A</p>
        </div>
        <div className={styles.sidebar_header_title}>
          <h6>Clinica Atias</h6>
          <CaretDown />
        </div>
      </div>
      <div className={styles.sidebar_menu}>
        <div className={styles.sidebar_menu_item}>
          <ChartBar size={24} weight="regular" />
          <p>Dashboard</p>
        </div>
        <div className={styles.sidebar_menu_item}>
          <Gift size={24} weight="regular" />
          <p>Promociones</p>
        </div>
        <div className={styles.sidebar_menu_item}>
          <Users size={24} weight="regular" />
          <p>Operadores</p>
        </div>
        <div className={styles.sidebar_menu_item}>
          <ArrowsLeftRight size={24} weight="regular" />
          <p>Transacciones</p>
        </div>
        <div className={styles.sidebar_menu_item}>
          <Printer size={24} weight="regular" />
          <p>Reportes</p>
        </div>
        <div className={styles.sidebar_menu_item}>
          <Gear size={24} weight="regular" />
          <p>Configuración</p>
        </div>
        <div className={styles.sidebar_menu_item}>
          <Bell size={24} weight="regular" />
          <p>Notificaciones</p>
        </div>
      </div>
      <div className={styles.sidebar_footer}>
        <div className={styles.sidebar_menu_item}>
          <SignOut size={24} weight="regular" />
          <p>Cerrar sesión</p>
        </div>
      </div>
    </aside>
  );
}
