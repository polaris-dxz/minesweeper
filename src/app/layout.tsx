import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "../redux/provider";
// import "98.css";
import { PWAMeta, viewportSetting } from "../config";
// import GTag from "@/components/gtag";
import { StrictMode } from "react";

export const viewport = viewportSetting;
export const metadata: Metadata = {
  ...PWAMeta,
  keywords:
    "minesweeper, play minesweeper, game, minesweeper free, minesweeper game, classic minesweeper, minesweeper google, microsoft minesweeper, minesweeper mac, minesweeper windows, mine sweeper, how to play minesweeper",
  category: "game",
  verification: {
    google: ""
  },
  alternates: {
    canonical: "https://minesweeper-ai.vercel.app/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dvh-screen flex flex-col justify-between transition-colors bg-[--theme-desktop-bg]  dark:bg-[--theme-desktop-dark-bg]">
        <StrictMode>
          <ReduxProvider>{children}</ReduxProvider>
        </StrictMode>
        <div id="root-modal" className="minesweeper-modal"></div>
        <aside id="confetti-modal" className="minesweeper-modal"></aside>
        <aside id="confirm-modal" className="minesweeper-modal"></aside>
        {/* {process.env.NODE_ENV == "production" && <GTag />} */}
      </body>
    </html>
  );
}
