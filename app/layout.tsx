import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "itschekuri | Practical IT Solutions",
    template: "%s | itschekuri",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.person, url: site.url }],
  creator: site.person,
  keywords: [
    "Raja Vamsi Chekuri",
    "itschekuri",
    "IT consultant",
    "business solutions designer",
    "product specialist",
    "CRM implementation",
    "ITSM optimization",
    "business process discovery",
    "technology implementation",
    "business intelligence",
    "automation consulting",
  ],
  openGraph: {
    title: "itschekuri | Practical IT Solutions",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/brand-logo.png", width: 600, height: 200, alt: "itschekuri brand logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "itschekuri | Practical IT Solutions",
    description: site.description,
    images: ["/images/brand-logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#030407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.person,
      jobTitle: "IT Consultant and Business Solutions Designer",
    },
    description: site.description,
    areaServed: "United States",
    sameAs: site.socials.filter((social) => !social.href.startsWith("mailto:")).map((social) => social.href),
  };

  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
