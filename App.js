// import React from "react";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am a h1 tag"),
    React.createElement("h2", { id: "heading" }, "I am a h2 tag"),
  ])
);

/* const heading = React.createElement(
    "h1",
    {id: 'heading'},
    "Hello World from React !!"
  ); */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent, parent, parent ]);
