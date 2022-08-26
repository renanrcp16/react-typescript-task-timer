import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import { timeToSecs } from "../../common/utils/time";
import { Task } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: Task | undefined;
  finalizeTask: () => void;
}

export default function Cronometro({ selected, finalizeTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSecs(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      finalizeTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.titulo}>Escolha um card e clique em 'Começar'</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  );
}
