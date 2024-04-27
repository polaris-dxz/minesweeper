import React from "react";
import WinLogo from "../assets/win.logo.svg";
import Loading from "./loading";
type Props = {
  progress: number;
  rehydrated: boolean;
};

const StartScreen = ({ progress, rehydrated }: Props) => {

  return (
    <div className="dvh-screen w-screen bg-teal-500 flex flex-col items-center gap-2 justify-center">
      {rehydrated ? (
        <>
          <div className="w-40 h-32">
            <WinLogo className="w-full h-full" />{" "}
          </div>
          <progress max="100" value={progress}></progress>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default StartScreen;
