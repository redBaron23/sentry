"use client";

interface VariationChartProps {
  variation: number;
}

export function VariationChart({ variation }: VariationChartProps) {
  // Calculamos el ángulo basado en el porcentaje (100% = 180 grados)
  const angle = (variation / 100) * 180;

  // Determinamos el color basado en si es positivo o negativo
  const color = variation >= 0 ? "#22c55e" : "#ef4444"; // Verde para positivo, rojo para negativo

  return (
    <div className="relative w-48 h-24">
      {/* Arco base */}
      <div className="absolute w-full h-full border-t-[12px] border-gray-200 rounded-t-full"></div>

      {/* Arco de variación */}
      <div
        className="absolute w-full h-full border-t-[12px] rounded-t-full"
        style={{
          borderColor: color,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "bottom center",
          clipPath:
            variation >= 0
              ? "polygon(50% 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 50% 0, 100% 100%, 0 100%)",
        }}
      ></div>

      {/* Porcentaje */}
      <div className="absolute inset-0 flex items-center justify-center top-6">
        <span className="text-2xl font-bold" style={{ color }}>
          {variation > 0 ? "+" : ""}
          {variation}%
        </span>
      </div>
    </div>
  );
}
