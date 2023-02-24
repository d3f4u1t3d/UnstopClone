import React from "react";
import { useEffect } from "react";

function Login(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div>
      <div>Login</div>
    </div>
  );
}

export default Login;
