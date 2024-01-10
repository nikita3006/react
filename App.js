import React from 'react';
import ReactDOM from 'react-dom/client';

//react element

const heading = React.createElement("h2",{},"Niikuu");
console.log(heading)
const nik = ReactDOM.createRoot(document.getElementById("root"));
nik.render(heading)


