import { Car, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Book", href: "#cta" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/80">
                <Car className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-semibold">Crimson Detail Co.</p>
                <p className="text-xs text-white/70">Premium Auto Detailing</p>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>

          {open && (
            <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="tel:+1234567890"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
