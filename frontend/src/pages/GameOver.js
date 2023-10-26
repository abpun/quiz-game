import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import VerticalCenter from "../layouts/VerticalCenter";
import http from "../config/http";

export default function GameOver() {
    const navigate = useNavigate();
    const location = useLocation();
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    let score = location.state && location.state.score;

    const form = useForm();
    const { register, handleSubmit } = form;

    const onSubmit = (data) => {
        setLoading(true);

        if (score === null) score = 0;
        data = { ...data, score };

        http.post("/api/highscore", data)
            .then((response) => {
                if (response.status === 200) {
                    setLoading(false);
                    setDisabled(true);
                } else {
                    setLoading(false);
                }
            })
            .catch((err) => {
                setLoading(false);
            });
    };

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
                Score: {score}
            </Typography>
            <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    size="small"
                    label="username"
                    variant="outlined"
                    {...register("name")}
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
                <LoadingButton
                    type="submit"
                    variant="outlined"
                    loading={loading}
                    loadingPosition="start"
                    disabled={disabled}
                    sx={{
                        mb: 1,
                        width: "180px",
                        background: "#fff",
                        color: "#2196f3",
                        fontSize: "16px",
                    }}
                >
                    Save
                </LoadingButton>
            </FormControl>
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
