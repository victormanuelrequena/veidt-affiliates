import React, { CSSProperties } from "react";
import { scaleBand, scaleLinear, max } from "d3";

const months = [
  { key: "Enero", value: 18.1 },
  { key: "Febrero", value: 14.3 },
  { key: "Marzo", value: 27.1 },
  { key: "Abril", value: 40 },
  { key: "Mayo", value: 12.7 },
  { key: "Junio", value: 22.8 },
  { key: "Julio", value: 17.8 },
  { key: "Agosto", value: 5.8 },
  { key: "Septiembre", value: 42 },
  { key: "Octubre", value: 12.7 },
  { key: "Noviembre", value: 24.7 },
  { key: "Diciembre", value: 19.7 }
];

export function MonthlyIncomeComparisonChart() {
  const minBars = 12; // Asegurarse de que hay al menos 12 barras para los 12 meses del año
  const filledData = [
    ...months,
    ...Array.from({ length: Math.max(0, minBars - months.length) }, (_, i) => ({
      key: `Mes ${i + 1}`,
      value: 0
    }))
  ];
  // Scales
  const xScale = scaleBand()
    .domain(filledData.map((d) => d.key))
    .range([0, 100])
    .padding(0.3);

  const yScale = scaleLinear()
    .domain([0, max(months.map((d) => d.value)) ?? 0])
    .range([100, 0]);

  return (
    <div
      className="relative h-72 w-full grid"
      style={
        {
          "--marginTop": "0px",
          "--marginRight": "25px",
          "--marginBottom": "56px",
          "--marginLeft": "25px"
        } as CSSProperties
      }
    >
      {/* Y axis */}
      <div
        className="relative
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          w-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-visible
        "
      >
        {yScale
          .ticks(8)
          .map(yScale.tickFormat(8, "d"))
          .map((value, i) => (
            <div
              key={i}
              style={{
                top: `${yScale(+value)}%`
              }}
              className="absolute text-xs tabular-nums -translate-y-1/2 text-gray-300 w-full text-right pr-2"
            >
              {value}
            </div>
          ))}
      </div>

      {/* Chart Area */}
      <div
        className="absolute inset-0
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          w-[calc(100%-var(--marginLeft)-var(--marginRight))]
          translate-x-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-visible
        "
      >
        <svg
          viewBox="0 0 100 100"
          className="overflow-visible w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {yScale
            .ticks(8)
            .map(yScale.tickFormat(8, "d"))
            .map((active, i) => (
              <g
                transform={`translate(0,${yScale(+active)})`}
                className="text-gray-100/40 dark:text-gray-400/80"
                key={i}
              >
                <line
                  x1={0}
                  x2={100}
                  stroke="currentColor"
                  strokeDasharray="6,5"
                  strokeWidth={0.5}
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            ))}
        </svg>

        {/* X Axis (Labels) */}
        {months.map((entry, i) => {
          const xPosition = xScale(entry.key)! + xScale.bandwidth() / 2;

          return (
            <div
              key={i}
              className="absolute overflow-visible text-gray-400"
              style={{
                left: `${xPosition}%`,
                top: "100%",
                transform: "rotate(45deg) translateX(4px) translateY(8px)"
              }}
            >
              <div
                className={`absolute text-xs -translate-y-1/2 whitespace-nowrap`}
              >
                {entry.key.slice(0, 10) + (entry.key.length > 10 ? "..." : "")}
              </div>
            </div>
          );
        })}

        {/* Bars */}
        {filledData.map((d, index) => {
          const barWidth = xScale.bandwidth();
          const barHeight = yScale(0) - yScale(d.value);

          return (
            <div
              key={index}
              style={{
                width: `${barWidth}%`,
                height: `${barHeight}%`,
                borderRadius: "6px 6px 0 0",
                marginLeft: `${xScale(d.key)}%`,
                backgroundColor: "var(--green-light)"
              }}
              className="absolute bottom-0"
            />
          );
        })}
      </div>
    </div>
  );
}
