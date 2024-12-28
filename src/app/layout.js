import "./globals.css";

export const metadata = {
  title: "Gridbox Manager",
  description: "Join Gridbox Manager, the ultimate F1 fantasy league app! Build your dream team, compete with friends, and climb the leaderboard. Experience Formula 1 like never before!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
