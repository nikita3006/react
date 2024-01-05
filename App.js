const heading = React.createElement("div", {id:"parent"},
 [React.createElement("div", {id:"child 1"},
[ React.createElement("h1",{},"I am h1 tag"),  React.createElement("h2",{},"I am h2 tag")])],
React.createElement("div", {id:"child 2"},
[ React.createElement("h1",{},"I am h1 tag"),  React.createElement("h2",{},"I am h2 tag")]));

console.log(heading) //this is nothing but just a react h1 element and react element is nothing but just a javascript object
 
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading) //render job - convert javascript obj and create h1 tag then render into root