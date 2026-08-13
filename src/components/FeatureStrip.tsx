import {
  IconCatering,
  IconDecor,
  IconDiamond,
  IconGuests,
  IconHall,
} from "@/components/Icons";
import { Container } from "@/components/ui";

const features = [
  { icon: IconHall, line1: "Spacious", line2: "Banquet Hall" },
  { icon: IconDecor, line1: "Elegant", line2: "Decor" },
  { icon: IconCatering, line1: "Exquisite", line2: "Cuisine" },
  { icon: IconDiamond, line1: "Premium", line2: "Ambience" },
  { icon: IconGuests, line1: "Perfect For", line2: "Every Occasion" },
] as const;

export default function FeatureStrip() {
  return (
    <div className="relative isolate overflow-hidden border-y border-[var(--gold)]/25 bg-black/80 backdrop-blur-sm">
      <Container size="wide" className="relative z-10">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 py-5 sm:flex sm:items-center sm:justify-center sm:gap-x-9 lg:gap-x-14">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <li key={f.line2} className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-[var(--gold)]" />
                <span className="text-[10.5px] font-semibold uppercase leading-[1.35] tracking-[0.13em] text-[var(--gold-soft)]">
                  {f.line1}
                  <span className="block">{f.line2}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
