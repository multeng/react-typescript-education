import React from "react";
import { useHistory } from "react-router-dom";

export const About: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница Информации</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        nostrum ratione error sit dolorum expedita, natus accusantium aliquid
        iusto suscipit?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        К списку дел
      </button>
    </>
  );
};
