"use client"

interface WaterBackgroundProps {
  className?: string
}

export function WaterBackground({ className = "" }: WaterBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="water-blob animate-float-slow left-[-10%] top-[-10%] h-72 w-72" />
      <div className="water-blob animate-float-slower right-[-8%] top-[20%] h-96 w-96" />
      <div className="water-blob animate-float-slow bottom-[-12%] left-[25%] h-80 w-80" />
    </div>
  )
}

export function WaveDivider({
  className = "",
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
    >
      <div className="relative h-[60px] w-[200%] animate-wave">
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: 0 }}
        >
          <path
            d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="h-full w-1/2"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: "50%" }}
        >
          <path
            d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}
