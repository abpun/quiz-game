import React from "react";
import { useState, useEffect } from "react";
import Container from "../layouts/Container";
import GameHUD from "../components/GameHUD";
import Question from "../components/Question";
import PageCenter from "../layouts/PageCenter";
import http from "../config/http";

export default function Game() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [response, setResponse] = useState([]);
    const [totalQuestion] = useState(5);

    useEffect(() => {
        http.get("/api/questions")
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <PageCenter>
            <Container>
                <GameHUD
                    score={score}
                    questionIndex={questionIndex}
                    totalQuestion={totalQuestion}
                />
                <Question
                    response={response}
                    setScore={setScore}
                    questionIndex={questionIndex}
                    setQuestionIndex={setQuestionIndex}
                    totalQuestion={totalQuestion}
                />
            </Container>
        </PageCenter>
    );
}
