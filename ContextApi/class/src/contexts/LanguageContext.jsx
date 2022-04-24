import { createContext, useState } from "react";

export const langContext =  createContext()

export const LangContextProvider = ({children}) => {
    const [lang,setLnag]=useState("en")
    const handleLang = ()=>{
        setLnag(lang === "en" ? "mal": "en");
    }

return <langContext.Provider value={{ lang, handleLang }}>{children}</langContext.Provider>;
}