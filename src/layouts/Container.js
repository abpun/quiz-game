import React from "react";
import { Box } from "@mui/material";

export default function Container({ children }) {
    return (
        <Box
            component="div"
            sx={{
                width: "1000px",
                margin: "2rem auto",
            }}
        >
            {children}
        </Box>
    );
}
