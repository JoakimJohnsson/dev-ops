import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StartPage from "./components/pages/StartPage";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<StartPage/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
