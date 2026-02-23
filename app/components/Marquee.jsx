"use client";

import Image from "next/image";
import { FadeIn, TextReveal, LineReveal } from "./Animations";

export default function Marquee() {
  const words = [
    "Luxury Living",
    "Vastu Compliant",
    "Premium Estates",
    "Timeless Design",
    "Legacy Homes",
    "Refined Engineering",
  ];

  return (
    <section className="py-12 bg-dark overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 mx-8"
          >
            <span className="text-2xl lg:text-3xl font-display font-semibold text-white/90 tracking-tight">
              {word}
            </span>
            <span className="block w-2 h-2 rounded-full bg-primary/30" />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
