"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, LineReveal } from "./Animations";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  projects: [
    { label: "Luxury Villas", href: "/projects#villas" },
    { label: "Premium Apartments", href: "/projects#apartments" },
    { label: "Independent Floors", href: "/projects#floors" },
    { label: "Plotted Development", href: "/projects#plots" },
  ],
  resources: [
    { label: "Vastu Guide", href: "/resources/vastu" },
    { label: "Home Buying Guide", href: "/resources/buying" },
    { label: "Investment Insights", href: "/resources/insights" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <FadeIn>
              <Image
                src="/full-logo-white.png"
                alt="Rishika Builders"
                width={160}
                height={56}
                className="h-24 w-auto mb-6"
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-sm text-white/40 font-body leading-relaxed max-w-sm mb-8">
                Not just spaces. Statements of legacy — Luxury redefined by
                Rishika Builders. Crafting enduring legacies through
                Vastu-compliant foundations and timeless aesthetics.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-5">
                <a
                  href="https://instagram.com/rishika_builders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Follow us on Instagram"
                >
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white/50 group-hover:text-white transition-colors"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com/rishika_builders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Follow us on Twitter"
                >
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white/50 group-hover:text-white transition-colors"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
            {/* Company */}
            <FadeIn delay={0.1}>
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-body font-medium mb-6">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/40 font-body hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Projects */}
            <FadeIn delay={0.2}>
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-body font-medium mb-6">
                  Projects
                </h4>
                <ul className="space-y-3">
                  {footerLinks.projects.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/40 font-body hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Resources + Contact */}
            <FadeIn delay={0.3}>
              <div>
                <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-body font-medium mb-6">
                  Get in Touch
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:info@rishikabuilders.com"
                      className="text-sm text-white/40 font-body hover:text-white transition-colors duration-300"
                    >
                      info@rishikabuilders.com
                    </a>
                  </li>
                  <li>
                    <p className="text-sm text-white/40 font-body">
                      Sonipat, Haryana
                    </p>
                  </li>
                  <li>
                    <a
                      href="https://www.rishikabuilders.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 font-body hover:text-white transition-colors duration-300"
                    >
                      www.rishikabuilders.com
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Divider */}
        <LineReveal className="w-full my-12" delay={0.2} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <FadeIn delay={0.3}>
            <p className="text-xs text-white/25 font-body tracking-wider">
              &copy; {new Date().getFullYear()} Rishika Builders. All rights
              reserved.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/25 font-body hover:text-white/50 transition-colors tracking-wider"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/25 font-body hover:text-white/50 transition-colors tracking-wider"
              >
                Terms of Service
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
