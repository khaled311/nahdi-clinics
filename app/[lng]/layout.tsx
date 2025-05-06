import { Metadata } from "next";
import "./globals.css";
import { UpperBar } from "@/components/shared/upper-bar/upper-bar";
import { Navbar } from "@/components/shared/navbar/navbar";
import { FooterTop } from "@/components/shared/footer-top/footer-top";
import { Footer } from "@/components/shared/footer/footer";
import { Cairo } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Nahdi Care Clinics",
  description: "Nahdi Care Clinics",
};

export default async function LngLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const lng = (await params).lng;
  const dir = lng === "ar" ? "rtl" : "ltr";

  return (
    // <LocaleProvider locale={lng}>
    <html lang={lng} dir={dir || "rtl"}>
      <body className={`${cairo.className} ${cairo.variable} antialiased`}>
        <UpperBar />
        <Navbar />
        {children}
        <FooterTop />
        <Footer />
      </body>
    </html>
    // </LocaleProvider>
  );
}
