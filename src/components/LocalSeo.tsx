import Link from "next/link";
import { fullAddress, site } from "@/lib/site";
import { Container } from "@/components/ui";

const areas = [
  "Uttarahalli",
  "Poornapragna Layout",
  "Banashankari",
  "Kengeri",
  "Rajarajeshwari Nagar",
  "JP Nagar",
  "Girinagar",
  "Vijayanagar",
  "Kanakapura Road",
  "Padmanabhanagar",
];

/**
 * Locality section. Real, useful orientation for visitors that also gives
 * search engines the place names and service terms this venue should rank for.
 */
export default function LocalSeo() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)] py-14 sm:py-16">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[1.6rem] leading-snug text-[var(--ink-deep)] sm:text-[1.9rem]">
              A convention hall in Uttarahalli, South Bengaluru
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
              {site.name} sits at {fullAddress}, a few minutes from Uttarahalli Main Road and within
              easy reach of Banashankari, Kengeri and Rajarajeshwari Nagar. The air-conditioned,
              pillar-free hall seats up to 1200 guests, with in-house catering, a bridal suite,
              on-site guest rooms and parking for 200+ cars, so a wedding, reception, engagement,
              naming ceremony or corporate meet can run start to finish in one place.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Dates fill quickest between November and February and again from April to June. If
              you have a muhurtham date in mind, call{" "}
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="font-medium text-[var(--ink-deep)] underline decoration-[var(--gold)] underline-offset-4"
              >
                {site.phone}
              </a>{" "}
              and we&apos;ll tell you straight away whether the hall is free.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--ink-deep)] px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--gold)] hover:text-[var(--ink-deep)]"
              >
                Check date availability
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-[13px] font-semibold text-[var(--ink-deep)] transition-colors hover:border-[var(--gold)]"
              >
                See the hall
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
              Guests travel to us from
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[var(--border)] px-3.5 py-1.5 text-[12.5px] text-[var(--muted)]"
                >
                  {area}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[11px] font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
              Occasions we host
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-[var(--muted)]">
              Weddings and muhurthams, receptions, engagements and nichayathartham, naming
              ceremonies, housewarmings, birthdays, anniversaries, retirement parties, corporate
              annual meets, dealer conventions and product launches.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
