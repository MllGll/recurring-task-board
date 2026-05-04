import React, { useEffect, useRef, useState } from "react";
import Add from "../../components/Add";
import Header from "../../components/Header";
import Task from "../../components/Task";
import { Container } from "./style";
import { ThemeProvider } from "styled-components";
import light from "../../commons/styles/themes/light";
import dark from "../../commons/styles/themes/dark";
import GlobalStyle from "../../commons/styles/global";
import usePersistedState from "../../commons/hooks/usePersistedState";
import { computeIntervalRollover } from "./intervalBuckets";
import { addTask, removeTask } from "./utils";

const Main = () => {
  //tasks
  const [tasks, setTasks] = usePersistedState(
    "@recurring-task-board/tasks",
    []
  );
  /** Último intervalo processado por quadro (virada = limpar não fixadas / resetar checks). */
  const [periodBuckets, setPeriodBuckets] = usePersistedState(
    "@recurring-task-board/period-buckets",
    {}
  );
  const [inputText, setInputText] = useState("");
  const id = Math.round(Math.random() * 99999999);

  //periods
  const periods = ["Hoje", "Semana", "Mês", "Ano"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const period = periods[currentIndex];

  //themes
  const [theme, setTheme] = usePersistedState("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const rolloverSnapshot = useRef({ tasks, periodBuckets });
  rolloverSnapshot.current = { tasks, periodBuckets };

  const applyRolloverFromSnapshot = () => {
    const { tasks: t, periodBuckets: b } = rolloverSnapshot.current;
    const { nextTasks, nextBuckets, changed } = computeIntervalRollover(
      t,
      b,
      periods
    );
    if (!changed) return;
    const tasksChanged = JSON.stringify(nextTasks) !== JSON.stringify(t);
    const bucketsChanged =
      JSON.stringify(nextBuckets) !== JSON.stringify(b);
    if (tasksChanged) setTasks(nextTasks);
    if (bucketsChanged) setPeriodBuckets(nextBuckets);
  };

  useEffect(() => {
    applyRolloverFromSnapshot();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rodar uma vez na montagem com estado já hidratado do localStorage
  }, []);

  useEffect(() => {
    const onFocus = () => applyRolloverFromSnapshot();
    const onVisible = () => {
      if (document.visibilityState === "visible") applyRolloverFromSnapshot();
    };
    const intervalId = window.setInterval(applyRolloverFromSnapshot, 60_000);
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisible);
      window.clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <Header
          periods={periods}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Add
          onSave={() =>
            addTask(inputText, setInputText, id, period, tasks, setTasks)
          }
          inputText={inputText}
          setInputText={setInputText}
        />
        <div className="board">
          {tasks.map((task, index) => {
              return (
                period === task.period && (
                  <Task
                    title={task.inputText}
                    key={task.id}
                    index={index}
                    onRemove={() => removeTask(task.id, tasks, setTasks)}
                    setTasks={setTasks}
                    isChecked={task.checked}
                    isFixed={task.fixed}
                  />
                )
              );
            })}
        </div>
        <footer>
          <button onClick={toggleTheme}>
            <i class="material-icons">lightbulb</i>
          </button>
          <p>
            Desenvolvido por <b>Marcello Gallante</b>
          </p>
        </footer>
      </Container>
    </ThemeProvider>
  );
};

export default Main;
