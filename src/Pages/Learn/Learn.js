import React from "react";
import { useEffect } from "react";
import Header from "../../Components/Header/Header";

function Learn(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default Learn;
