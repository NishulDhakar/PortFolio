import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
         <div className="relative bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white overflow-hidden">
          {children}
          </div>
      </body>
    </html>
  );
}
