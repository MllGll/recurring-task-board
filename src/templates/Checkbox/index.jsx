import React from "react";
import Container from "./style.js";

const Checkbox = ({ containerClass, toggle, title }) => {
  return (
    <Container>
      <button className={containerClass} onClick={toggle} title={title}>
        <i class="material-icons">done</i>
      </button>
    </Container>
  );
};
export default Checkbox;
