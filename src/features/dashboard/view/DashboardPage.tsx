"use client";
import Navbar from "@/shared/ui/Navbar";
import StatsCard from "../ui/StatsCard";
import styles from "./DashboardPage.module.css";
import { ChartLineUp, CreditCard, UsersThree } from "phosphor-react";
import { MonthlyIncomeComparisonChart } from "../ui/MonthlyIncomeComparisonChart";
import { MostRequestedServiceChart } from "../ui/MostRequestedServiceChart";

export default function DashboardPage() {
  return (
    <div>
      <Navbar breadcrumbs={[{ label: "Dashboard" }]} />
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_header}>
          <h1 className={styles.dashboard_title}>Dashboard</h1>
        </div>
        <div className={styles.dashboard_content}>
          <div className={styles.stats_cards_container}>
            <StatsCard
              title="Ingresos Gift Care"
              icon={<ChartLineUp weight="regular" size={24} />}
              value="GC 20.320"
              percentage="-5.00%"
            />
            <StatsCard
              title="Pacientes atendidos"
              icon={<UsersThree weight="regular" size={24} />}
              value="1200"
              percentage="+2.00%"
            />
            <StatsCard
              title="Total de creditos otorgados"
              icon={<CreditCard weight="regular" size={24} />}
              value="GC 20.320"
              percentage="+2.00%"
            />
          </div>
          <div className={styles.dashboard_charts_container}>
            <div
              className={`${styles.dashboard_charts_container_left} ${styles.chart_container}`}
            >
              <h2 className={styles.chart_title}>Ingresos por mes</h2>
              <MonthlyIncomeComparisonChart />
            </div>
            <div
              className={`${styles.dashboard_charts_container_right} ${styles.chart_container}`}
            >
              <h2 className={styles.chart_title}>Servicios más solicitados</h2>
              <MostRequestedServiceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
