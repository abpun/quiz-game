import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Container from "../layouts/Container";
import PageCenter from "../layouts/PageCenter";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container>
            <PageCenter>
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
                    Play
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
                >
                    Difficulty
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
                >
                    High Scores
                </Button>
            </PageCenter>
        </Container>
    );
}
