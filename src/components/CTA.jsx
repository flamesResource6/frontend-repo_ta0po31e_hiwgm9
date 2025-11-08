import { Calendar, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-black to-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold sm:text-4xl">Ready for that showroom glow?</h3>
            <p className="mt-3 text-white/70">
              Tell us about your vehicle and preferred date. Our team will confirm your appointment and tailor the package to your needs.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                <Calendar className="h-5 w-5" />
                Book Online
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <PhoneCall className="h-5 w-5" />
                Call (123) 456-7890
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-red-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm text-white/80">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-red-500"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="text-sm text-white/80">Vehicle</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-red-500"
                  placeholder="Make & model"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Preferred Date</label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-red-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/80">Notes</label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-red-500"
                  placeholder="Tell us anything we should know"
                />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                Request Estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
