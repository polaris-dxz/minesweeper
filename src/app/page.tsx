"use client";
import { useRef } from "react";
import usePreload from "@/hooks/usePreload";
import StartScreen from "@/components/start-screen";
import Minesweeper from "@/components/minesweeper";
import RecordsWindow from "@/components/window-records";
import TaskBar from "@/components/task-bar";

// import DesktopShortcut from "@/components/desktop-shortcut";
// import PWAUpgradeChecker from "@/components/pwa-upgrade-checker";
// import WindowArticle from "@/components/window-article";

export default function Home() {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const { loaded, progress, rehydrated } = usePreload();

  if (!loaded) return <StartScreen progress={progress} rehydrated={rehydrated} />;
  return (
    <>
      <main
        ref={boardRef}
        className="pb-12 relative flex flex-col transition-colors flex-1 w-screen justify-start items-start [&_.fsh]:fullscreen:hidden"
      >
        {/* <DesktopShortcut /> */}
        <Minesweeper />
        <TaskBar />
        {/* <Rank /> */}
      </main>
      {/* <PWAUpgradeChecker /> */}
      <RecordsWindow />
      {/* <WindowArticle /> */}
    </>
  );
}
