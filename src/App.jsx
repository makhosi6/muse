import { useState } from "react";
import reactLogo from "./assets/images/blue_logo.svg";
import MobileWrapper from "./components/layout/MobileWrapper";
import './assets/css/app.css'

function App() {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([
    "pink",
    "orange",
    "brown",
    "black",
    "white",
    "gray",
    "gold",
    "silver",
    "navy blue",
    "sky blue",
    "lime green",
    "teal",
    "indigo",
    "magenta",
    "violet",
    "khaki",
    "salmon",
    "crimson",
    "lavender",
    "plum",
  ]);

  return (
    <div>
      <MobileWrapper>
        <ol>
          <li className="subject_font" ><span>Subject Font</span></li>
          <li className="title_font" ><span>Title Font</span></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </MobileWrapper>
    </div>
  );
}

export default App;
