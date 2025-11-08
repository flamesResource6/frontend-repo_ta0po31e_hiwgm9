import { Sparkles, Droplets, ShieldCheck, VacuumCleaner } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Paint Correction",
    desc: "Remove swirls, haze, and light scratches for a mirror-like finish.",
    features: ["Machine polish", "Gloss enhancement", "Safe techniques"],
  },
  {
    icon: Droplets,
    title: "Ceramic Coating",
    desc: "Long-lasting protection with hydrophobic beading and deep gloss.",
    features: ["2–5 year options", "UV protection", "Easy maintenance"],
  },
  {
    icon: VacuumCleaner,
    title: "Interior Deep Clean",
    desc: "Steam, shampoo, and leather care to refresh your cabin.",
    features: ["Odor treatment", "Stain removal", "Leather conditioning"],
  },
  {
    icon: ShieldCheck,
    title: "Premium Wash",
    desc: "Safe two-bucket wash, wheel care, and sealant for weekly shine.",
    features: ["pH neutral", "Wheel & tire", "Quick sealant"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Signature Packages</h2>
          <p className="mt-3 text-white/70">
            Hand-crafted services designed to elevate and protect your vehicle inside and out.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, features }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="inline-flex rounded-xl bg-red-600/20 p-3 text-red-400 ring-1 ring-inset ring-red-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
