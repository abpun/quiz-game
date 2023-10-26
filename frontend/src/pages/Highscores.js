import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import VerticalCenter from "../layouts/VerticalCenter";
import HighScoreTable from "../components/HighScoreTable";
import CButton from "../components/CButton";
import { highscoresColumns } from "../config/columns";
import http from "../config/http";

export default function Highscores() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        http.get("/api/highscores")
            .then((res) => {
                setData(res.data);
                setLoading(false);
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
