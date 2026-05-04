import React, { useEffect, useState } from "react";
import Checkbox from "../../templates/Checkbox/index.jsx";
import Container from "./style.js";

const Task = (props) => {
  const { title, onRemove, setTasks, index, isChecked, isFixed, t } = props;
  const [checked, setChecked] = useState(isChecked);
  const [fixed, setFixed] = useState(isFixed);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  useEffect(() => {
    setFixed(isFixed);
  }, [isFixed]);

  const checkedToggle = () => {
    setTasks((init) => {
      init[index] = { ...init[index], checked: !isChecked };
      return [...init];
    });
    setChecked(!checked);
  };

  const checkedClass = checked ? "checked" : "";
  const checkedContainerClass = `checkbox ${checkedClass}`.trim();

  const fixedToggle = () => {
    setTasks((init) => {
      init[index] = { ...init[index], fixed: !isFixed };
      return [...init];
    });
    setFixed(!fixed);
  };

  const fixedClass = fixed ? "fixed" : "";
  const fixedContainerClass = `fixar ${fixedClass}`.trim();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <Container>
        <Checkbox
          containerClass={checkedContainerClass}
          toggle={checkedToggle}
          title={t("check")}
        />
        <div className="resto">
          <span className={checkedContainerClass}>{title}</span>
          <div className="but">
            <button
              className={fixedContainerClass}
              onClick={fixedToggle}
              title={t("schedule")}
            >
              <i className="material-icons">schedule</i>
            </button>
            <button className="excluir" onClick={onRemove} title={t("delete")}>
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Task;
