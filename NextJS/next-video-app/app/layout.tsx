import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Browse and search movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0 }}>
        <nav style={navStyle}>
          <div style={navContainerStyle}>
            <Link href="/" style={logoStyle}>
              <Image src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png"
                alt="Logo"
                width={100}
                height={40}
              />
            </Link>
            <div style={navLinksStyle}>
              <Link href="/" style={linkStyle}>
                홈
              </Link>
              <Link href="/movies" style={linkStyle}>
                영화 목록
              </Link>
              <Link href="/search" style={linkStyle}>
                검색
              </Link>
            </div>
          </div>
        </nav>
        <main style={mainStyle}>{children}</main>
      </body>
    </html>
  );
}

const navStyle: React.CSSProperties = {
  backgroundColor: "#1a1a1a",
  padding: "1rem 2rem",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const navContainerStyle: React.CSSProperties = {
  maxWidth: "100%",
  margin: "0",
  padding: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "2rem",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s",
};

const mainStyle: React.CSSProperties = {
  maxWidth: "100%",
  margin: "0",
  padding: "0",
};
