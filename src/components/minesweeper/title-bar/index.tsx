import WindowTitleBar from "@/components/window-title-bar";
import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMini, updateArticle } from "@/redux/slice/user.data";

const TitleBar = () => {
  const boardRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const handleMini = () => {
    dispatch(toggleMini());
  };
  const handleFullscreen = () => {
    if (boardRef && boardRef.current) {
      boardRef.current.requestFullscreen();
    }
  };

  return (
    <WindowTitleBar>
      <>
        <button aria-label="Minimize" onClick={handleMini} title="Hide the window"></button>
        {/* <button
          aria-label="Help"
          // onClick={() => {
          //   dispatch(updateArticle("how-to-play"));
          // }}
          title="How to play minesweeper"
        ></button>
        <button
          aria-label="Maximize"
          className="!hidden md:!block"
          // onClick={handleFullscreen}
        ></button> */}
      </>
    </WindowTitleBar>
  )
}

export default TitleBar