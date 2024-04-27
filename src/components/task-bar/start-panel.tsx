// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { updateArticle } from "@/redux/slice/user.data";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ItemProps = {
  selected?: boolean;
  name: string;
  icon: string;
  title: string;
  clickHandler: () => void;
};
const MenuItem = ({ selected = false, icon, title, clickHandler }: ItemProps) => {
  return (
    <li
      onClick={clickHandler}
      role="button"
      className={clsx(
        "p-1.5 flex items-center gap-4 cursor-pointer hover:bg-[--theme-color] hover:text-white",
        selected && "bg-[--theme-color] text-white"
      )}
    >
      <Image src={icon} alt="help icon" width={30} height={30} />
      <span className="text-xs whitespace-nowrap">{title}</span>
    </li>
  );
};
const StartPanel = ({ closePanel }: { closePanel: () => void }) => {
  // const article = useAppSelector((store) => store.userData.article);
  // const dispatch = useAppDispatch();
  const arts = [
    {
      selected: false,
      icon: "/win/feedback.png",
      title: "Feedback",
      clickHandler: () => {
        window.open('https://github.com/polaris-dxz/minesweeper/issues', '_blank');
        closePanel();
      }
    },
  ] as ItemProps[];
  return (
    <aside className="window max-w-[unset] w-52">
      <div className="window-body !p-0 !m-0">
        <ul className="">
          {arts.map((item) => {
            return <MenuItem key={item.title} {...item} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default StartPanel;
