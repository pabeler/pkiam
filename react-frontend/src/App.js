import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HistoryForm from "./components/HistoryForm";
import {createContext, useState} from "react";
import HistoryPage from "./components/HistoryPage";

export const formContext = createContext();

function App() {
    const [formOutput, setFormOutput] = useState('');
    const [response, setResponse] = useState('');

    return (
        <div className="App">
            <formContext.Provider value={{formOutput, setFormOutput, response, setResponse}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/history/:city" element={<HistoryPage/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/history" element={<HistoryForm/>}/>
                    </Routes>
                </BrowserRouter>
            </formContext.Provider>
        </div>
    );
}

export default App;
