import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// pages
import Home from "./pages/Home";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import GameOver from "./pages/GameOver";
import Highscores from "./pages/Highscores";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Routes>
      <Route index element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/game" element={isLoggedIn ? <Game /> : <Navigate to="/login" />} />
      <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
      <Route path="/gameover" element={isLoggedIn ? <GameOver /> : <Navigate to="/login" />} />
      <Route path="/highscores" element={isLoggedIn ? <Highscores /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
