import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export const ContentsContext = createContext();

function App() {
  const [contents, setContents] = useState([{}]);
  const value = {
    contents,
    setContents,
  };

  return (
    <ContentsContext.Provider value={value}>
      <div className='h-screen bg-red-50 font-sans overflow-hidden'>
        <Header />
        <Main />
      </div>
    </ContentsContext.Provider>
  );
}

export default App;
