import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Question({
    response,
    setScore,
    questionIndex,
    setQuestionIndex,
    totalQuestion,
}) {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [availableQuestions, setAvailableQuestions] = useState([]);
    const [userChoice, setUserChoice] = useState(null);

    useEffect(() => {
        const questions = response.map((item) => {
            const question = item.question;
            const questionWithNewLines = question.replace(/\n/g, "<br />");
            console.log(questionWithNewLines);

            const formattedQuestion = {
                question: questionWithNewLines,
            };

            let answerChoices = [...item.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3);

            answerChoices.splice(
                formattedQuestion.answer,
                0,
                item.correct_answer
            );

            formattedQuestion.choices = answerChoices;

            return formattedQuestion;
        });
        setAvailableQuestions(questions);
    }, [response]);

    useEffect(() => {
        setCurrentQuestion(availableQuestions[questionIndex]);
    }, [availableQuestions, questionIndex]);

    const handleSubmit = (key) => {
        setUserChoice(key);
        if (key === currentQuestion.answer) {
            console.log("Correct");
            setScore((prev) => prev + 10);
        } else {
            console.log("Incorrect");
        }

        setTimeout(() => {
            if (questionIndex < totalQuestion - 1)
                setQuestionIndex((prevValue) => prevValue + 1);
            setUserChoice(null);
        }, 1000);
    };

    if (questionIndex === totalQuestion)
        return (
            <Typography variant="h2" sx={{ textAlign: "center", mt: 4 }}>
                Game Over
            </Typography>
        );

    return (
        <>
            <Typography
                variant={currentQuestion?.question?.length > 150 ? "h4" : "h3"}
                sx={{ fontWeight: "bold", color: "#444", mt: 2 }}
            >
                {currentQuestion?.question}
            </Typography>
            {currentQuestion &&
                currentQuestion.choices &&
                currentQuestion?.choices.map((choice, index) => (
                    <Box
                        key={index}
                        component="div"
                        sx={{
                            display: "flex",
                            mt: 2,
                            "&:hover": {
                                cursor: "pointer",
                            },
                        }}
                        onClick={(event) => handleSubmit(index)}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                background: "#2196f3",
                                color: "white",
                                padding: "16px 24px",
                            }}
                        >
                            {index + 1}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                boxSizing: "border-box",
                                width: "100%",
                                color: userChoice === index ? "#fff" : "#444",
                                background:
                                    userChoice === index
                                        ? userChoice === currentQuestion.answer
                                            ? "#4caf50"
                                            : "#f50057"
                                        : "white",
                                border: "1px solid #2196f3",
                                padding: "16px 24px",
                            }}
                        >
                            {choice}
                        </Typography>
                    </Box>
                ))}
        </>
    );
}
