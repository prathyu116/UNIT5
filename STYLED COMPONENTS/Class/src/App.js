import { useState } from "react";
import "./App.css";
import { Button } from "./componets/Button";
import { Flex } from "./componets/Flex";
function App() {
  const [theme,setTheme] = useState("dark")
  return (
    <div className="App">
      <h1>theme is:{theme}</h1>
      <Button theme={theme}>Signin</Button>
      <Button onClick={()=>alert("ddd")}>Clickme</Button>
      <Flex>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flex>
      <Button onClick={()=>{
        setTheme(theme==="light" ? "dark" :"light")
      }}> change theme</Button>
    </div>
  );
}

export default App;
