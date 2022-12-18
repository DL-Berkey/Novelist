import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import Header from "./layout/Header";
import Aside from "./layout/Aside";
import Home from "./layout/Home";

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Menu /> */}
                <Header />
                {/* <Aside />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home>
                                <div>hello</div>
                            </Home>
                        }
                    />
                </Routes> */}
            </Router>
        </div>
    );
}

export default App;
