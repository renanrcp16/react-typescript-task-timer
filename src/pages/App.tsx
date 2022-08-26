import React, { useState } from "react";
import Cronometro from "../components/Stopwatch";
import Form from "../components/Form";
import List from "../components/List";
import { Task } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selected, setSelecionado] = useState<Task>();

  function selectTask(selectedTask: Task) {
    setSelecionado(selectedTask);
    setTasks((tasksAnteriores) =>
      tasksAnteriores.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finalizeTask() {
    if (selected) {
      setSelecionado(undefined);
      setTasks((tasksAnteriores) =>
        tasksAnteriores.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometro selected={selected} finalizeTask={finalizeTask} />
    </div>
  );
}

export default App;
