import { useAppSelector } from "@/redux/hooks";
import clsx from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

let inter = 0;
const CornerFooter = () => {
  const [time, setTime] = useState(dayjs().format("hh:mm A"));
  useEffect(() => {
    inter = window.setInterval(() => {
      setTime(dayjs().format("hh:mm A"));
    }, 1000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <footer
      className="hidden md:flex gap-1 items-center !px-2 status-bar-field"
    >
      <time className="">{time}</time>
    </footer>
  );
};

export default CornerFooter;
