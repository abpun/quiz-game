import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Game from "./pages/Game";

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    );
};

export default App;
