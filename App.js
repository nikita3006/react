import React from "react";
import ReactDOM from "react-dom/client";

// JSX is like HTML or XML syntax
// const jsxHeading = <h1 className='head'>Nikita writing using jsx</h1>;
// console.log(jsxHeading); // Remove the second argument "red"

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const elm = <span>nikita react element</span>
const Title = ()=>(
    <h1>  
        Hi I am react 
    </h1>
)
    


//React functional Component
const Header = () => {
  return (
    <>
      {/* <h2>{20000}</h2> */}
      <h1>{elm}</h1>
      {Title()}
      <Title/>
      <Title></Title>
      <h1>Functional Component</h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
