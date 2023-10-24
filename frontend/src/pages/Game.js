import React from "react";
import { useState, useEffect } from "react";
import Container from "../layouts/Container";
import GameHUD from "../components/GameHUD";
import Question from "../components/Question";
import PageCenter from "../layouts/PageCenter";
import http from "../config/http";

const Game = () => {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [totalQuestion] = useState(5);

    useEffect(() => {
        http.get("/api/questions")
            .then((res) => {
                const formattedQuestions = res.data.map((item) => {
                    let answerChoices = [...item.incorrect_answers];
                    const answerIndex = Math.floor(Math.random() * 3);

                    answerChoices.splice(answerIndex, 0, item.correct_answer);

                    return {
                        question: item.question,
                        answer: answerIndex,
                        choices: answerChoices,
                    };
                });

                setQuestions(formattedQuestions);
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
                    setScore={setScore}
                    questionIndex={questionIndex}
                    setQuestionIndex={setQuestionIndex}
                    availableQuestions={questions}
                    totalQuestion={totalQuestion}
                />
            </Container>
        </PageCenter>
    );
};

const MemoizedGame = React.memo(Game);
export default MemoizedGame;
