import React, { useState, useCallback, useEffect } from "react";
import { Box, Skeleton, Typography } from "@mui/material";

const Question = ({
    loading,
    setScore,
    questionIndex,
    setQuestionIndex,
    availableQuestions,
}) => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [isAnswered, setIsAnswered] = useState(false);
    const [userChoice, setUserChoice] = useState(null);

    useEffect(() => {
        setCurrentQuestion(availableQuestions[questionIndex]);
    }, [questionIndex, availableQuestions]);

    const handleAnswerClick = useCallback(
        (index) => {
            if (isAnswered) return;
            setUserChoice(index);
            setIsAnswered(true);

            if (index === currentQuestion.answer) {
                setScore((prev) => prev + 10);
            }

            setTimeout(() => {
                setQuestionIndex((prevValue) => prevValue + 1);
                setUserChoice(null);
                setIsAnswered(false);
            }, 1000);
        },
        [currentQuestion, setQuestionIndex, setScore, isAnswered]
    );

    return (
        <>
            {loading ? (
                <>
                    <Skeleton width="100%" height={160} />
                    <Skeleton width="100%" height={80} />
                    <Skeleton width="100%" height={80} />
                    <Skeleton width="100%" height={80} />
                    <Skeleton width="100%" height={80} />
                </>
            ) : (
                <>
                    <Typography
                        variant={
                            currentQuestion?.question?.length > 150
                                ? "h4"
                                : "h3"
                        }
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
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                {index + 1}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    boxSizing: "border-box",
                                    width: "100%",
                                    color:
                                        userChoice === index ? "#fff" : "#444",
                                    background:
                                        userChoice === index
                                            ? userChoice ===
                                              currentQuestion.answer
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
            )}
        </>
    );
};

const MemoizedQuestion = React.memo(Question);
export default MemoizedQuestion;
