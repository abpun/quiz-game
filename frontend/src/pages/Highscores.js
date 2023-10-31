import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { highscoresColumns } from "../config/columns";
import VerticalCenter from "../layouts/VerticalCenter";
import HighScoreTable from "../components/HighScoreTable";
import CButton from "../components/CButton";
import http from "../config/http";

export default function Highscores() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const settings = useSelector((state) => state.settings);

    useEffect(() => {
        setLoading(true);
        http.get(`/api/highscores?level=${settings.level}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [settings.level]);

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

            <Typography variant="h6" sx={{ mb: 1, color: "#555" }}>
                Highscore: {settings.level}
            </Typography>

            <HighScoreTable
                data={data}
                loading={loading}
                columns={highscoresColumns}
            />

            <CButton
                text="Go Home"
                sx={{
                    mt: 2,
                }}
                onClick={() => navigate("/")}
            >
                Go Home
            </CButton>
        </VerticalCenter>
    );
}
