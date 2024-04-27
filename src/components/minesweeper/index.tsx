import clsx from "clsx";
import Board from "@/components/minesweeper/board";
import StatusBar from "@/components/minesweeper/status-bar";
import TitleBar from "@/components/minesweeper/title-bar";
import { useAppSelector } from "@/redux/hooks";
import { shallowEqual } from "react-redux";


const Minesweeper = () => {
  const minimized = useAppSelector((store) => store.userData.minimized, shallowEqual);
  const level = useAppSelector((store) => store.userData.level, shallowEqual);
  const status = useAppSelector((store) => store.minesweeper.status, shallowEqual);
  return (
    <div
      id="SCREEN_SHOOT_AREA"
      className={clsx(
        'window transition-transform translate-x-0 m-auto !bg-[--theme-bg-color] dark:brightness-75',
        minimized && 'hidden'
      )}
    >
      <TitleBar />
      <div className="window-body !bg-[--theme-bg-color]">
        <StatusBar />
        <Board />
      </div>
      <div className="status-bar fsh html2img-ignore">
        <p className="status-bar-field capitalize !pl-2">Level: {level}</p>
        <p className="status-bar-field capitalize !pl-2">Status: {status}</p>
      </div>
    </div>
  )
}

export default Minesweeper