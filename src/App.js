// import Button from "./Button"
// import styled from "./App.module.css"
import { useState, useEffect} from "react"

function Hello()
{
  const [cnt, setCnt] = useState(0);
  useEffect(function () {

    console.log("hi :)" + cnt);
    setCnt((a)=>a+1);
   
    console.log("hi :)" + cnt);
    return function () {
      console.log("bye :(" + cnt);
      setCnt((a)=>a+1);
      console.log("bye :(" + cnt);
    };
  }, []);

  return <h1>{"Hello" + cnt}</h1>;
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
