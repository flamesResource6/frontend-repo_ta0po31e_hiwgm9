import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Jordan P.",
    text: "My black M3 has never looked this deep and glossy. The ceramic coating is unreal.",
  },
  {
    name: "Ava R.",
    text: "They removed years of swirl marks. Interior detail smells brand new. Highly recommend!",
  },
  {
    name: "Leo D.",
    text: "Professional, punctual, and meticulous. Booking again for my wife's SUV.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What Drivers Say</h2>
          <p className="mt-3 text-white/70">Real results, real reactions from our happy clients.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-white/80">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-white">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
