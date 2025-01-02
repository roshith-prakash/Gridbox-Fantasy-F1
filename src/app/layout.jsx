import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "GridBox Manager - The Ultimate F1 Fantasy App",
  description:
    "GridBox Manager - The ultimate F1 fantasy league app! Build your dream team, compete with friends, and climb the leaderboard. Experience Formula 1 like never before!",
  icons: {
    icon: "/logo.png", // Path to your PNG file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
