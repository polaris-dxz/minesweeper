import Timer from "@/components/minesweeper/status-bar/timer";
import StartFaceButton from "@/components/minesweeper/status-bar/start-face-button";
import CounterView from "@/components/minesweeper/status-bar/counter-view";
import { difficulty } from "@/config";
import { useAppSelector } from "@/redux/hooks";
import { shallowEqual } from "react-redux";


const StatusBar = () => {
  const status = useAppSelector((store) => store.minesweeper.status, shallowEqual);
  const level = useAppSelector((store) => store.userData.level, shallowEqual);
  const remainingFlags = useAppSelector((store) => store.minesweeper.remainingFlags, shallowEqual);
  return (
    <div className="status-bar !mb-4">
      <div className="status-bar-field !bg-inherit !p-2 flex justify-between">
        <CounterView
          count={
            status == 'ready' ? difficulty[level].numMines : remainingFlags
          }
        />
        <StartFaceButton />
        <Timer />
      </div>
    </div>
  )
}

export default StatusBar