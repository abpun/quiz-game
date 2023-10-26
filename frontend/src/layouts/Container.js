import React from "react";
import { Box } from "@mui/material";

export default function Container({ children }) {
    return (
        <Box
            component="div"
            sx={{
                margin: "24px auto",
                padding: "0 16px",
                width: "1000px",
                "@media (min-width: 600px)": {
                    maxWidth: "600px",
                },
                "@media (max-width: 600px)": {
                    width: "100%",
                },
                "@media (min-width: 1200px)": {
                    maxWidth: "1000px",
                },
            }}
        >
            {children}
        </Box>
    );
}
