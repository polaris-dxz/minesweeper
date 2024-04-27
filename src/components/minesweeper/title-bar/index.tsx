import WindowTitleBar from "@/components/window-title-bar";
import { useAppDispatch } from "@/redux/hooks";
import { toggleMini } from "@/redux/slice/user.data";

const TitleBar = () => {
  const dispatch = useAppDispatch();

  const handleMini = () => {
    dispatch(toggleMini());
  };

  return (
    <WindowTitleBar>
      <>
        <button aria-label="Minimize" onClick={handleMini} title="Hide the window"></button>
      </>
    </WindowTitleBar>
  )
}

export default TitleBar