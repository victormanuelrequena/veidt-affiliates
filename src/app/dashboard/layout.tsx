import Sidebar from "@/shared/ui/Sidebar";
import React from "react";
import styles from "./Layout.module.css";
import Navbar from "@/shared/ui/Navbar";
export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <section className={styles.layout_content}>{children}</section>
    </div>
  );
}
