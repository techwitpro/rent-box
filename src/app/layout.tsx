import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";

export const metadata: Metadata = {
  title: "RentBox - Eco-Friendly Moving Solutions",
  description: "Say goodbye to soggy, torn cardboard boxes. Our plastic moving bins are weather-resistant, stackable, and reusable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: '"Schibsted Grotesk", sans-serif' }}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <FooterCTA />
        <Footer />
      </body>
    </html>
  );
}
