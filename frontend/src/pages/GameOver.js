import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, TextField, Typography } from "@mui/material";
import { Done, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import VerticalCenter from "../layouts/VerticalCenter";
import http from "../config/http";
import CButton from "../components/CButton";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import "react-toastify/dist/ReactToastify.css";

export default function GameOver() {
  const settings = useSelector((state) => state.settings);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  let score = location.state && location.state.score;

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setLoading(true);
    if (score === null) score = 0;
    data = { ...data, score, level: settings.level };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };


    http
      .post("/api/highscore", data, config)
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          toast.success(res.data.message, toastConfig);
          setIsSaved(true);
        } else {
          toast.success(res.data.message, toastConfig);
        }
      })
      .catch((err) => {
        setLoading(false);
        setIsSaved(false);
      });
  };

  return (
    <VerticalCenter>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.palette.primary.main,
          mb: 4,
        }}
      >
        Score: {score}
      </Typography>
      <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Your username"
          size="small"
          placeholder="Enter username..."
          variant="filled"
          error={Boolean(errors.username)}
          helperText={errors?.username?.message}
          value={user?.userDetails?.username}
          {...register("username", {
            required: {
              value: true,
              message: "Enter this field",
            },
          })}
          sx={{
            mb: 1,
            width: "180px",
            borderRadius: "5px",
            "& .MuiFilledInput-root": {
              background: theme.palette.secondary.main,
            },
            "&:hover .MuiFilledInput-root": {
              background: theme.palette.secondary.main,
            },
            "&:not(:focus) .MuiFilledInput-root": {
              background: theme.palette.secondary.main,
            },
            "&:focused .MuiFilledInput-root": {
              background: theme.palette.secondary.main,
            },
          }}
        />
        <LoadingButton
          type="submit"
          variant="outlined"
          loading={loading}
          loadingPosition="start"
          startIcon={isSaved ? <Done /> : <Save />}
          sx={{
            mb: 1,
            width: "180px",
            background: theme.palette.secondary.main,
            color: theme.palette.text.primary,
            fontSize: "16px",
          }}
        >
          {isSaved ? "Saved" : "Save"}
        </LoadingButton>
      </FormControl>
      <CButton text="Play Again" onClick={() => navigate("/game")} />
      <CButton text="Go Home" onClick={() => navigate("/")} />
    </VerticalCenter>
  );
}
