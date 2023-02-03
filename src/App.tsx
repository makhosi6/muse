import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TopAppBar from "./components/TopAppBar";
import { MobileFriendly } from "@material-ui/icons";
import { MobileWrapper } from "./components/layout/MobileWrapper";
import { Story } from "./components/articles/Story";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopAppBar />
      <MobileWrapper>
        <Story />
        <Story />
        <Story />
      </MobileWrapper>
    </>
  );
}

export default App;
