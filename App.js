const Heading = React.createElement("div", { id: "parent" }, [ 
  React.createElement("div", { id: "child" } , [
  React.createElement("h1", {}, "I am From H1"),
  React.createElement("h2", {}, "I am from h2"),
]),
  React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "I am an h1 tag from child 2"),
    React.createElement("h2", {}, "I am an h2 tag from child 2"),
    ]) , ]);
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
