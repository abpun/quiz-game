import React from "react";
import { Box } from "@mui/material";

export default function Container({ children }) {
    return (
        <Box
            component="div"
            sx={{
                maxWidth: "100%",
                padding: "0 16px",
                margin: "24px auto",
                "@media (min-width: 600px)": {
                    maxWidth: "600px",
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
