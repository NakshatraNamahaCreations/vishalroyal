import Link from "next/link";
import { footerNav, fullAddress, services, site } from "@/lib/site";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { Container } from "@/components/ui";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink-deep)] text-white/75">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size={54} />
          <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
          <div className="mt-5 flex gap-3">
            {[
              ["Instagram", site.social.instagram],
              ["Facebook", site.social.facebook],
              ["YouTube", site.social.youtube],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs transition-colors hover:border-[var(--gold)] hover:text-[var(--gold-soft)]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[var(--gold-soft)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            We Host
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="transition-colors hover:text-[var(--gold-soft)]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Reach Us
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex gap-3">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              <span>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-[var(--gold-soft)]">
                  {site.phone}
                </a>
                <br />
                <a href={`tel:${site.phoneAlt.replace(/\s/g, "")}`} className="hover:text-[var(--gold-soft)]">
                  {site.phoneAlt}
                </a>
                <br />
                <a href={`tel:${site.landline.replace(/[\s-]/g, "")}`} className="hover:text-[var(--gold-soft)]">
                  {site.landline}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              <a href={`mailto:${site.email}`} className="hover:text-[var(--gold-soft)]">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://www.nakshatranamahacreations.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--gold)] transition-colors hover:text-[var(--gold-soft)]"
            >
              Nakshatra Namaha Creations
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
