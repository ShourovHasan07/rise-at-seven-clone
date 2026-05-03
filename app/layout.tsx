import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rise at Seven | Award Winning Search-First Content Marketing Agency",
  description: "Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, Ai and LLM search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <nav className="navbar">
          <div className="logo">Rise at Seven</div>
          <ul className="nav-links">
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2025 Rise at Seven – Search-First Creative Agency. London | New York | Sheffield | EU</p>
        </footer>
      </body>
    </html>
  );
}