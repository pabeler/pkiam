import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import History from "./components/History";
import {createContext, useState} from "react";

export const formContext = createContext();

function App() {
    const [formOutput, setFormOutput] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div className="App">
            <formContext.Provider value={{formOutput, setFormOutput, response, setResponse}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/history" element={<History/>}/>
                    </Routes>
                </BrowserRouter>
            </formContext.Provider>
        </div>
  );
}

export default App;
