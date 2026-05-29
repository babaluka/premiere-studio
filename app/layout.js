export const metadata = {
  title: "PREMIERË STUDIO — Cinematic Wedding Experience",
  description: "Luxury Wedding Films & Photography",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}