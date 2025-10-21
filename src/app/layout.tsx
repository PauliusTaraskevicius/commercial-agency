import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const kannit = Kanit({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Commercial agency",
  description:
    "We are a dynamic commercial agency specializing in strategic business solutions and property transactions. With extensive market expertise, we facilitate seamless connections between property owners, investors, and businesses to optimize commercial opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kannit.className} flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <main className="flex h-[100dvh] flex-col pt-[30px]">
          {" "}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </main>
      </body>
    </html>
  );
}
