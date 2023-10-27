import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import VerticalCenter from "../layouts/VerticalCenter";
import CButton from "../components/CButton";

export default function Home() {
    const navigate = useNavigate();

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

            <CButton
                text="High Scores"
                onClick={() => navigate("/highscores")}
            />
        </VerticalCenter>
    );
}
