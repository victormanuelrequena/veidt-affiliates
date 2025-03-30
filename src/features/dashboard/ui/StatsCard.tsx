import React from "react";
import styles from "./StatsCard.module.css";

interface StatsCardProps {
  title: string;
  icon?: React.ReactNode;
  value?: string;
  percentage?: string;
}

export default function StatsCard({
  title,
  icon,
  value,
  percentage
}: StatsCardProps) {
  return (
    <div className={styles.stats_card}>
      <div className={styles.stats_card_header}>
        <div className={styles.stats_card_icon}>{icon}</div>
        <div className={styles.stats_card_content}>
          <h3 className={styles.stats_card_title}>{title}</h3>
        </div>
      </div>
      <div className={styles.stats_card_value_container}>
        <div className={styles.padding_icon} />
        <div className={styles.stats_card_value_wrapper}>
          <p className={styles.stats_card_value}>{value}</p>
          {percentage && (
            <span
              className={`${styles.percentage} ${
                percentage.includes("-")
                  ? styles.percentage_negative
                  : styles.percentage_positive
              }`}
            >
              {percentage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
