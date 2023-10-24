import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import VerticalCenter from "../layouts/VerticalCenter";

export default function GameOver() {
    const navigate = useNavigate();

    return (
        <VerticalCenter>
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#2196f3",
                    mb: 4,
                }}
            >
                Score
            </Typography>
            <TextField
                size="small"
                label="username"
                variant="outlined"
                sx={{
                    width: "180px",
                    mb: 1,
                    background: "#fff",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            border: "none",
                            borderBottom: "3px solid #2196f3",
                        },
                        "&:hover fieldset": {
                            border: "none",
                            borderBottom: "3px solid #2196f3",
                        },
                        "&.Mui-focused fieldset": {
                            border: "1px solid #2196f3",
                            borderBottom: "3px solid #2196f3",
                        },
                    },
                }}
            />
            <Button
                variant="outlined"
                sx={{
                    mb: 1,
                    width: "180px",
                    background: "#fff",
                    color: "#2196f3",
                    fontSize: "16px",
                }}
                onClick={() => navigate("/highscores")}
            >
                Save
            </Button>
            <Button
                variant="outlined"
                sx={{
                    mb: 1,
                    width: "180px",
                    background: "#fff",
                    color: "#2196f3",
                    fontSize: "16px",
                }}
                onClick={() => navigate("/game")}
            >
                Play Again
            </Button>
            <Button
                variant="outlined"
                sx={{
                    mb: 1,
                    width: "180px",
                    background: "#fff",
                    color: "#2196f3",
                    fontSize: "16px",
                }}
                onClick={() => navigate("/")}
            >
                Go Home
            </Button>
        </VerticalCenter>
    );
}
