import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/libs/Providers";
import { routing } from "@/i18n/routing";
import type { Lang } from "@/types/types";
import type { Metadata } from "next";
import { Archivo, Inter, Vazirmatn } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fusion Performance — Elite Fitness Coaching",
  description:
    "Transform your body with science-backed training, personalised nutrition, and 24/7 expert coaching. 12,000+ transformations and counting.",
  keywords: [
    "fitness coach",
    "personal training",
    "muscle gain",
    "fat loss",
    "HIIT",
    "strength training",
    "nutrition plans",
  ],
  openGraph: {
    title: "Fusion Performance — Elite Fitness Coaching",
    description: "12,000+ transformations powered by science and obsession.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fa" | "en")) {
    notFound();
  }

  const lang = locale as Lang;
  setRequestLocale(locale);
  const messages = await getMessages();
  const isRTL = lang === "fa";

  return (
    <html
      lang={lang}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${inter.variable} ${archivo.variable} ${vazirmatn.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
