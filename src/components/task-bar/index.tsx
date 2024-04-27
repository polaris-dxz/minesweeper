import React, { LegacyRef, useState, memo } from "react";
import SelectLevel from "./select-level";
import SelectZoom from "./select-cellsize";
// import DarkMode from "../button-darkmode";
// import ScreenShot from "../screenshot";
// import SoundSwitch from "../sound-switch";
import { RecordWindowTitle } from "../window-records";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import clsx from "clsx";
import { toggleMini, toggleMiniRecords } from "@/redux/slice/user.data";
import { useClickAway } from "@uidotdev/usehooks";

import SelectUI from "./ui-switch";
import CornerFooter from "./footer";
import StartPanel from "./start-panel";
// import Feedback from "./feedback";

const StartButton = () => {
  const [panelVisible, setPanelVisible] = useState(false);
  const refPanel = useClickAway(() => {
    setPanelVisible(false);
  });
  
  const togglePanel = () => {
    setPanelVisible((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        onClick={togglePanel}
        className={clsx("px-2 min-w-[unset]", panelVisible && "active")}
      >
        <Image alt="start button" src={"/win/start-button.png"} width={45} height={14} />
      </button>
      {panelVisible && (
        <div
          className="absolute left-0-0 -top-4 -translate-y-full"
          ref={refPanel as LegacyRef<HTMLDivElement>}
        >
          <StartPanel closePanel={togglePanel} />
        </div>
      )}
    </div>
  )
}

const MinesweeperButton = () => {
  const dispatch = useAppDispatch();
  const minimized = useAppSelector((store) => store.userData.minimized);

  const handleMini = () => {
    dispatch(toggleMini());
  };

  return (
    <button
      onClick={handleMini}
      className={clsx(
        "px-3 flex items-center justify-center gap-1 !min-w-[unset]",
        !minimized && "active"
      )}
    >
      <Image alt="mine icon" src={"/icon.png"} width={14} height={14} />
      <span className="hidden md:inline-block">Mine Sweeper</span>
    </button>
  )
}

const RecordsButton = () => {
  const dispatch = useAppDispatch();
  const recordWindowMinimized = useAppSelector((store) => store.userData.recordWindowMinimized);
  const handleMiniRecords = () => {
    dispatch(toggleMiniRecords());
  };
  return (
    <button
      onClick={handleMiniRecords}
      className={clsx(
        "px-3 flex items-center justify-center gap-1 !min-w-[unset]",
        !recordWindowMinimized && "active"
      )}
    >
      <Image alt="mine icon" src={"/win/table.png"} width={14} height={14} />
      <span className="hidden md:inline-block">{RecordWindowTitle}</span>
    </button>
  )
}
const Setting = () => {
  const [settingVisible, setSettingVisible] = useState(false);
  const toggleSetting = () => {
    setSettingVisible((prev) => !prev);
  };
  const ref = useClickAway(() => {
    // if (settingVisible) {
    setSettingVisible(false);
    // }
  });
  return (
    <div className="relative flex">
      <button
        id="MS_SETTING_BUTTON"
        onClick={toggleSetting}
        className={clsx("min-w-[unset] !p-1", settingVisible && "active")}
      >
        <Image alt="setting button" src={"/win/setting.png"} width={22} height={22} />
      </button>
      <aside
        ref={ref as LegacyRef<HTMLDivElement>}
        className={clsx(
          "window flex-col gap-4 !p-5 absolute right-0 -top-4 -translate-y-full",
          settingVisible ? "flex" : "hidden"
        )}
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold">Level:</label>
          <SelectLevel />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold">Size:</label>
          <SelectZoom />
        </div>
        {/* <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold">UI:</label>
          <SelectUI />
        </div> */}
        <div className="flex flex-col gap-1">
          {/* <DarkMode /> */}
        </div>
      </aside>
    </div>
  )
}

const Github = () => {
  return (
    <a href="https://github.com/polaris-dxz/minesweeper" className="mx-2" target="_blank">
      <Image alt="github icon" src={"/ms/github.png"} width={22} height={22} />
    </a>
  )
}

const TaskBar = () => {
  return (
    <div
      className="z-[999] window fixed bottom-0 left-0 w-full flex items-center justify-between gap-1 fsh !px-2 !py-1 dark:brightness-75"
    >
      <div className="flex items-center gap-1">
        <StartButton />
        <MinesweeperButton />
        <RecordsButton />
      </div>
      <div className="flex items-center gap-2">
        <Setting />
        {/* <SoundSwitch /> */}
        <Github />
        <CornerFooter />
      </div>
    </div>
  );
};

export default memo(TaskBar);
