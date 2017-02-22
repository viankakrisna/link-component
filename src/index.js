import React from "react";
import history from "./history";

export default function Link({ to, ...props }) {
  return (
    <a
      href={to}
      onClick={e => {
        e.preventDefault();
        history.push(to);
      }}
      {...props}
    />
  );
}
