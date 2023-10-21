import { Routes, Route } from "react-router-dom";

// layouts
import GameLayout from "./layouts/GameLayout";
import Game from "./pages/Game";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<GameLayout />}>
                <Route index element={<Game />} />
            </Route>
        </Routes>
    );
};

export default App;
