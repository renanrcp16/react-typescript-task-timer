import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDozen, minuteUnit] = String(minutes).padStart(2, "0");
  const [secondDozen, secondUnit] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{minuteDozen}</span>
      <span className={style.clockNumber}>{minuteUnit}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{secondDozen}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </>
  );
}
