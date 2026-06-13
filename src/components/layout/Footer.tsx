"use client";

import { NAV_ITEMS } from "@/constants";
import { Zap } from "lucide-react";
import { FaInstagram, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";
import { CopyrightYear } from "@/components/ui/CopyrightYear";
import { useTranslation } from "@/hooks/useTranslation";
import type { Translations } from "@/libs/i18n/translations";

const SOCIAL_LINKS = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaXTwitter, href: "#", label: "X / Twitter" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
  { Icon: FaTiktok, href: "#", label: "TikTok" },
];

export function Footer() {
  const { t } = useTranslation();

  const FOOTER_LINKS = [
    { label: t.footer.privacy, href: "#" },
    { label: t.footer.terms, href: "#" },
    { label: t.footer.cookies, href: "#" },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-[#CCFF00]">
                <Zap className="w-4 h-4 text-black" fill="black" />
              </div>
              <span className="text-white font-black uppercase tracking-wider text-sm font-heading">
                Fusion{" "}
                <span className="text-[#CCFF00]">Performance</span>
              </span>
            </a>
            <p className="text-[#555555] text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 border border-white/10 text-[#555555] hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5">
              {t.footer.navigation}
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#555555] hover:text-[#CCFF00] text-sm transition-colors duration-200"
                  >
                    {t.nav[item.key as keyof Translations["nav"]]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-5">
              {t.footer.contact}
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[#555555] text-sm">
                <span className="text-[#888888]">{t.footer.emailLabel} </span>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  {t.footer.email}
                </a>
              </li>
              <li className="text-[#555555] text-sm">
                <span className="text-[#888888]">{t.footer.hoursLabel} </span>
                {t.footer.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#333333] text-xs font-medium">
            © <CopyrightYear /> {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#333333] hover:text-[#CCFF00] text-xs transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
