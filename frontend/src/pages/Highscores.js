import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { highscoresColumns } from "../config/columns";
import VerticalCenter from "../layouts/VerticalCenter";
import HighScoreTable from "../components/HighScoreTable";
import CButton from "../components/CButton";
import http from "../config/http";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import "react-toastify/dist/ReactToastify.css";

export default function Highscores() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const settings = useSelector((state) => state.settings);

  useEffect(() => {
    setLoading(true);
    http
      .get(`/api/highscores?level=${settings.level}`)
      .then((res) => {
        let parsedScore = res.data.map((score) => {
          let scoreData = {
            _id: score._id,
            name: score.user.name,
            score: score.score,
            level: score.level,
            username: score.user.username,
          };
          return scoreData;
        });

        setData(parsedScore);
        setLoading(false);
      })
      .catch((err) => {
        toast.warning(err.response?.data.message, toastConfig);
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
        Level: {settings.level}
      </Typography>

      <HighScoreTable data={data} loading={loading} columns={highscoresColumns} />

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
