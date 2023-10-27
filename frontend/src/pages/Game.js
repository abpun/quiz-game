import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "../layouts/Container";
import GameHUD from "../components/GameHUD";
import Question from "../components/Question";
import PageCenter from "../layouts/PageCenter";
import http from "../config/http";

const Game = () => {
    const settings = useSelector((state) => state.settings);
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [totalQuestion] = useState(Number(settings.totalQuestion));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        http.get(
            `/api/questions?level=${settings.level}&totalQuestions=${totalQuestion}`
        )
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
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [settings, totalQuestion]);

    return (
        <PageCenter>
            <Container>
                <GameHUD
                    score={score}
                    questionIndex={questionIndex}
                    totalQuestion={totalQuestion}
                />
                <Question
                    loading={loading}
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
