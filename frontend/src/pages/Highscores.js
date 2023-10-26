import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import VerticalCenter from "../layouts/VerticalCenter";
import HighScoreTable from "../components/HighScoreTable";
import http from "../config/http";
import { highscoresColumns } from "../config/columns";

export default function Highscores() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        http.get("/api/highscores")
            .then((res) => {
                setData(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                HighScores
            </Typography>

            <HighScoreTable
                data={data}
                loading={loading}
                columns={highscoresColumns}
            />

            <Button
                variant="outlined"
                sx={{
                    mt: 2,
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
