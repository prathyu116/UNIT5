import { useContext } from "react";
import "./App.css";
import Card from "./components/Body/Card.jsx";
import Navbar from "./components/Navbar.jsx";
import { langContext } from "./contexts/LanguageContext";

function App() {
  const { handleLang } = useContext(langContext);
  return (
    < >

      <Navbar />
      <button onClick={()=>{
        handleLang();
      }}>ChangeLang</button>
      <Card />
    </>
  );
}

export default App;
