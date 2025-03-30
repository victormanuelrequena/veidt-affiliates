"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
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
import { routes } from "@/shared/config/routes";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (route: string) => pathname.startsWith(route);

  function handleLogout() {
    router.push(routes.auth.login);
  }

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
        <Link
          href={routes.dashboard}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.dashboard) ? styles.active : ""
          }`}
        >
          <ChartBar size={24} weight="regular" />
          <p>Dashboard</p>
        </Link>
        <Link
          href={routes.promotions}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.promotions) ? styles.active : ""
          }`}
        >
          <Gift size={24} weight="regular" />
          <p>Promociones</p>
        </Link>
        <Link
          href={routes.operators}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.operators) ? styles.active : ""
          }`}
        >
          <Users size={24} weight="regular" />
          <p>Operadores</p>
        </Link>
        <Link
          href={routes.transactions}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.transactions) ? styles.active : ""
          }`}
        >
          <ArrowsLeftRight size={24} weight="regular" />
          <p>Transacciones</p>
        </Link>
        <Link
          href={routes.reports}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.reports) ? styles.active : ""
          }`}
        >
          <Printer size={24} weight="regular" />
          <p>Reportes</p>
        </Link>
        <Link
          href={routes.settings}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.settings) ? styles.active : ""
          }`}
        >
          <Gear size={24} weight="regular" />
          <p>Configuración</p>
        </Link>
        <Link
          href={routes.notifications}
          className={`${styles.sidebar_menu_item} ${
            isActive(routes.notifications) ? styles.active : ""
          }`}
        >
          <Bell size={24} weight="regular" />
          <p>Notificaciones</p>
        </Link>
      </div>
      <div className={styles.sidebar_footer}>
        <div className={styles.sidebar_menu_item} onClick={handleLogout}>
          <SignOut size={24} weight="regular" />
          <p>Cerrar sesión</p>
        </div>
      </div>
    </aside>
  );
}
