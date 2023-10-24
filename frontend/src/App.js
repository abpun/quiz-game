import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/gameover" element={<GameOver />} />
        </Routes>
    );
};

export default App;
