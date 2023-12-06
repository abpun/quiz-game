import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export default function GameHUD({ score, questionIndex, totalQuestion }) {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if (questionIndex >= totalQuestion) {
      navigate("/gameover", { state: { score } });
    }
  }, [questionIndex, totalQuestion, score, navigate]);

  let progress = Math.ceil(((questionIndex + 1) / totalQuestion) * 100);
  if (questionIndex + 1 > totalQuestion) progress = 100;

  return (
    <>
      <Box
        variant="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
            Question {questionIndex + 1}/{totalQuestion}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              mt: 1.25,
              width: "200px",
              height: "40px",
              border: `3px solid ${theme.palette.primary.main}`,
              background: "transparent",
              ".MuiLinearProgress-bar1Determinate": {
                background: theme.palette.primary.main,
                borderBottom: `2px solid ${theme.palette.secondary.main}`,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: theme.palette.text.secondary, textAlign: "center" }}
          >
            Score
          </Typography>
          <Typography
            color={theme.palette.primary.main}
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            {score}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
