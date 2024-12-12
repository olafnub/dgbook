import "./globals.css";
import VercelAnalytics from "./components/VercelAnalytics";

export const metadata = {
  title: "dbbook",
  description: "a website storage for reducing sidebar cluttering"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}