import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CommandPalette } from "@/components/command-palette";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "itschekuri | Raja Vamsi Chekuri",
    template: "%s | itschekuri",
  },
  description: site.description,
  applicationName: "itschekuri",
  authors: [{ name: site.person, url: site.url }],
  creator: site.person,
  keywords: [
    "Raja Vamsi Chekuri",
    "itschekuri",
    "technology consultant",
    "IT consulting",
    "business solution design",
    "solution architecture",
    "digital transformation",
    "AI",
    "cloud technologies",
    "product strategy",
    "enterprise software",
    "process automation",
  ],
  openGraph: {
    title: "itschekuri | Raja Vamsi Chekuri",
    description: site.description,
    url: site.url,
    siteName: "itschekuri",
    images: [{ url: "/images/itschekuri-logo.png", width: 1024, height: 1024, alt: "itschekuri logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "itschekuri | Raja Vamsi Chekuri",
    description: site.description,
    images: ["/images/itschekuri-logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.person,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    jobTitle: "Technology Consultant and Business Solutions Designer",
    sameAs: site.socials.filter((social) => !social.href.startsWith("mailto:")).map((social) => social.href),
    knowsAbout: [
      "IT Consulting",
      "Business Solution Design",
      "Product Strategy",
      "Solution Architecture",
      "Digital Transformation",
      "Enterprise Software",
      "Artificial Intelligence",
      "Cloud Technologies",
      "Technology Sales",
      "Process Automation",
      "Customer Success",
    ],
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
        <CommandPalette />
      </body>
    </html>
  );
}
