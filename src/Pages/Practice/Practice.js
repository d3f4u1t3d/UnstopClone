import React from "react";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";

function Practice(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default Practice;
