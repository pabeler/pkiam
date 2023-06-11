import './App.css';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <MyNavbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
