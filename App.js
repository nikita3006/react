const heading = React.createElement("h1", {id:"heading"}, "REACT");
console.log(heading) //this is nothing but just a react h1 element and react element is nothing but just a javascript object
 
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading) //render job - convert javascript obj and create h1 tag then render into root