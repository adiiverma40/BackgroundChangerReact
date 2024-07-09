import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");
  let top1 = "40rem";
  let red = () => {
    setColor("red")
  }
  let white = () =>{
    setColor("white")
  }
  let blue = () => {
    setColor("blue")
  }
  let pink = () => {
    setColor("pink")
  }
  let green = () => {
    setColor("green")
  }
  let black = () => {
    setColor("black")
  }
  return (
    <div
      className="absolute  w-full h-screen "
      style={{ backgroundColor: color }}
    >
      <div
        id="bottom"
        className="bg-white w-3/4 h-10 rounded mr-auto mx-auto fixed left-0 right-0 flex justify-evenly items-center"
        style={{ top: top1 }}
      >
        <button onClick={red}>Red</button>
        <button onClick={white}>White</button>
        <button onClick={blue}>Blue</button>
        <button onClick={pink}> Pink</button>
        <button onClick={black}>Black</button>
        <button onClick={green}>Green</button>
      </div>
    </div>
  );
}

export default App;
