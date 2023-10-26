import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import GameOver from "./pages/GameOver";
import Highscores from "./pages/Highscores";

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/gameover" element={<GameOver />} />
            <Route path="/highscores" element={<Highscores />} />
        </Routes>
    );
};

export default App;
