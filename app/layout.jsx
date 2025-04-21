import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbars from "./Pages/Navbars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Developer Service",
  description: "We specialize in connecting talented professionals with innovative companies across the African continent. Our platform focuses on five key domains that drive the digital economy",
  openGraph: {
    type: "website",
    title: "Developer Service",
    url: "https://techsolvering.netlify.app/",
    image: "https://images.pexels.com/photos/5060973/pexels-photo-5060973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "We specialize in connecting talented professionals with innovative companies across the African continent. Our platform focuses on five key domains that drive the digital economy"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:description" content={metadata.openGraph.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbars />
        {children}
      </body>
    </html>
  );
}
