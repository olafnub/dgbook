import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics beforeSend={(e) => {
        // if url includes sensitive data, then don't proceed with analytics
        const url = new URL(e.url);
        url.searchParams.delete("secret");
        url.searchParams.delete("private");
        return {
          ...e,
          url: url.toString()
        }
      }}/>
      </body>
    </html>
  );
}