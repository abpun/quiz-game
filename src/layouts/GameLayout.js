import React from "react";
import Container from "./Container";
import GameHUD from "../components/GameHUD";
import Question from "../components/Question";
import { useState } from "react";

const response = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
        correct_answer: "Apple",
        incorrect_answers: ["Microsoft", "Atari", "Commodore"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does the &quot;MP&quot; stand for in MP3?",
        correct_answer: "Moving Picture",
        incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
    },
];

export default function GameLayout() {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [totalQuestion] = useState(response.length);

    return (
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
    );
}
