"use client";

export default function SplineBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        src="https://prod.spline.design/230f00e1-1d9e-4be7-99c5-d65d5d9b05aa/embed"
        className="w-full h-full scale-110 opacity-40 blur-sm pointer-events-none"
        frameBorder="0"
      />
    </div>
  );
}
