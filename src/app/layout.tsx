import type { Metadata } from "next";
import { Inter, Archivo, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Providers } from "@/libs/Providers";
import { LangProvider } from "@/libs/LangProvider";
import { Navbar } from "@/components/layout/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${inter.variable} ${archivo.variable} ${vazirmatn.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans antialiased">
        <Providers>
          <LangProvider />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
