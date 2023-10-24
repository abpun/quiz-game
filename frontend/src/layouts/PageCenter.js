import React from "react";
import { Box } from "@mui/material";

export default function PageCenter({ children }) {
    return (
        <Box
            component="div"
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "@media (max-width: 600px)": {
                    height: "auto",
                },
            }}
        >
            {children}
        </Box>
    );
}
