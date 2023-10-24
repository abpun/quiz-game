import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Question = ({
    setScore,
    questionIndex,
    setQuestionIndex,
    totalQuestion,
    availableQuestions,
}) => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [userChoice, setUserChoice] = useState(null);

    useEffect(() => {
        setCurrentQuestion(availableQuestions[questionIndex]);
    }, [questionIndex, availableQuestions]);

    const handleAnswerClick = useCallback(
        (index) => {
            setUserChoice(index);

            if (index === currentQuestion.answer) {
                setScore((prev) => prev + 10);
            }

            setTimeout(() => {
                setQuestionIndex((prevValue) => prevValue + 1);
                setUserChoice(null);
            }, 1000);
        },
        [currentQuestion, setQuestionIndex, setScore]
    );

    if (questionIndex >= totalQuestion) navigate("/gameover");

    return (
        <>
            <Typography
                variant={currentQuestion?.question?.length > 150 ? "h4" : "h3"}
                sx={{
                    fontWeight: "bold",
                    color: "#444",
                    mt: 2,
                    "@media (max-width: 600px)": {
                        fontSize: 30,
                    },
                }}
            >
                {currentQuestion?.question}
            </Typography>
            {currentQuestion?.choices?.map((choice, index) => (
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
                    onClick={() => handleAnswerClick(index)}
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
};

const MemoizedQuestion = React.memo(Question);
export default MemoizedQuestion;
