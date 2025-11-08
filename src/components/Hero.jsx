import Spline from "@splinetool/react-spline";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              4.9/5 Rated Service
            </span>
            <span className="mx-2 text-white/30">•</span>
            Same-day Appointments
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Precision Detailing for a Showroom Shine
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Ceramic coatings, paint correction, interior deep clean, and premium hand washes. We bring a studio-grade finish to your daily driver or weekend supercar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
            >
              Book Your Detail
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
