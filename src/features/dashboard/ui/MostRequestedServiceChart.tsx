import React from "react";

const data = [
  { key: "Cardiologia", value: 85.8 },
  { key: "Pediatria", value: 34.3 },
  { key: "Dermatologia", value: 27.1 },
  { key: "Ginecologia", value: 22.5 }
];

export function MostRequestedServiceChart() {
  return (
    <div className="w-full h-full grid gap-4 py-4">
      {/* Bars */}
      {data.map((d, index) => {
        return (
          <div key={index}>
            <div
              className={`text-sm whitespace-nowrap ${index === 0 ? "" : "text-zinc-400"}`}
            >
              {d.key}
            </div>
            <div className="flex items-center gap-2.5">
              <div
                key={index}
                className="relative rounded-sm h-3 bg-gray-200 overflow-hidden w-full"
              >
                <div
                  className={`absolute inset-0 rounded-r-sm`}
                  style={{
                    width: `${(d.value / Math.max(...data.map((d) => d.value))) * 100}%`,
                    backgroundColor:
                      index === 0 ? "var(--yellow-light)" : "var(--black-light)"
                  }}
                />
              </div>
              <div
                className={`text-sm whitespace-nowrap text-gray-900 tabular-nums`}
              >
                {d.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
