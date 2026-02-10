import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google"; // Import both
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

// Configure the fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // This creates a CSS variable we can use
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Imena Paper Pop",
  description: "Luxury Family Invitations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeInitScript = `
    (() => {
      try {
        const stored = localStorage.getItem("imena-theme");
        const preference = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
        const isDark = preference === "dark" || (preference === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList.toggle("theme-dark", isDark);
      } catch {
        // ignore
      }
    })();
  `;

  return (
    <html lang="en">
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      {/* Apply the font variables to the body */}
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
