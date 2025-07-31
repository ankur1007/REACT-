
const parent = React.createElement
    ("div", { id: "parents" }, [React.createElement("div", { id: "child" }, "hello child 1"),
    React.createElement("div", {}, "twochild")])

const heading = React.createElement('p', {}, 'hello world from React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);