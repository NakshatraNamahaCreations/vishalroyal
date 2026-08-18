"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { IconPhone } from "@/components/Icons";
import { Container } from "@/components/ui";
import Logo from "@/components/Logo";
import { useContactModal } from "@/components/ContactModal";

/**
 * Routes with a light hero. The header sits on ivory there, so it flips to
 * dark-on-light instead of the white-on-photo treatment used elsewhere.
 */
/** Currently none: every page opens on a dark banner or photo. */
const LIGHT_HERO_ROUTES = new Set<string>([]);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contactModal = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = LIGHT_HERO_ROUTES.has(pathname);
  const solid = scrolled || open;

  const t = light
    ? {
        bar: "border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl",
        hairline: "via-transparent",
        navIdle: "text-[var(--foreground)]/70 hover:text-[var(--ink)]",
        navActive: "text-[var(--ink)]",
        underline: "bg-[var(--ink)]",
        phone:
          "border-[var(--border)] bg-white/70 text-[var(--foreground)] hover:border-[var(--gold)]",
        phoneIcon: "text-[var(--ink)]",
        burger: "border-[var(--border)] bg-white/60 text-[var(--ink)]",
        drawer: "border-[var(--border)] bg-[var(--background)]/95",
        drawerIdle: "text-[var(--foreground)]/80",
      }
    : {
        bar: "border-b border-white/10 bg-black/85 backdrop-blur-xl",
        hairline: "via-[var(--gold)]/70",
        navIdle: "text-white/75 hover:text-white",
        navActive: "text-[var(--gold)]",
        underline: "bg-[var(--gold)]",
        phone:
          "border-white/15 bg-white/5 text-white/85 hover:border-[var(--gold)]/60 hover:text-white",
        phoneIcon: "text-[var(--gold)]",
        burger: "border-white/20 bg-white/5 text-white",
        drawer: "border-white/10 bg-black/95",
        drawerIdle: "text-white/80",
      };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? t.bar : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Gold hairline across the very top edge */}
      <div className={`h-px w-full bg-gradient-to-r from-transparent to-transparent ${t.hairline}`} />

      <Container size="wide" className="flex h-[76px] items-center justify-between gap-6">
        <Logo size={42} tone={light ? "dark" : "light"} />

        {/* Centre nav */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
                  active ? t.navActive : t.navIdle
                }`}
              >
                {item.label}
                {active ? (
                  <span className={`absolute inset-x-4 -bottom-0.5 h-px ${t.underline}`} />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className={`hidden items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium backdrop-blur-sm transition-colors xl:inline-flex ${t.phone}`}
          >
            <IconPhone className={`h-3.5 w-3.5 ${t.phoneIcon}`} />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={contactModal.open}
            className="hidden items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-[13px] font-semibold text-[#0c0c0c] shadow-lg shadow-black/20 transition-colors hover:bg-[var(--gold-soft)] sm:inline-flex"
          >
            Schedule a free visit
            <IconPhone className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full border backdrop-blur-sm lg:hidden ${t.burger}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open ? (
        <div className={`border-t backdrop-blur-xl lg:hidden ${t.drawer}`}>
          <Container size="wide" className="flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  pathname === item.href ? t.navActive : t.drawerIdle
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-[#0c0c0c]"
            >
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
