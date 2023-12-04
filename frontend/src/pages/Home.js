import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { logout } from "../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import "react-toastify/dist/ReactToastify.css";
import VerticalCenter from "../layouts/VerticalCenter";
import CButton from "../components/CButton";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("userData");
    toast.info("User logged out", toastConfig);
    navigate("/login");
  };

  return (
    <VerticalCenter>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          width: "300px",
          color: "#2196f3",
        }}
      >
        Digi Quiz
      </Typography>
      <CButton text="Play" onClick={() => navigate("/game")} />
      <CButton text="Settings" onClick={() => navigate("/settings")} />

      <CButton text="High Scores" onClick={() => navigate("/highscores")} />
      <CButton text="Logout" onClick={handleLogout} />
    </VerticalCenter>
  );
}
