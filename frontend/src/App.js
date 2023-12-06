import { useSelector } from "react-redux";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./config/themes";
import { useTheme } from "@mui/material";

// pages
import Home from "./pages/Home";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import GameOver from "./pages/GameOver";
import Highscores from "./pages/Highscores";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const App = ({ currentTheme, setCurrentTheme }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const theme = useTheme();

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game" element={isLoggedIn ? <Game /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/gameover" element={isLoggedIn ? <GameOver /> : <Navigate to="/login" />} />
          <Route
            path="/highscores"
            element={isLoggedIn ? <Highscores /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>

      <IconButton
        variant="contained"
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          background: theme.palette.background,
        }}
        onClick={toggleTheme}
      >
        {currentTheme === darkTheme ? <LightMode /> : <DarkMode />}
      </IconButton>
    </>
  );
};

export default App;
