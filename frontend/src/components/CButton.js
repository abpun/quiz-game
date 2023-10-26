import React from "react";
import { Button } from "@mui/material";

export default function CButton(props) {
    const { text, sx, ...otherProps } = props;
    return (
        <Button
            variant="outlined"
            sx={{
                mb: 1,
                width: "180px",
                background: "#fff",
                color: "#2196f3",
                fontSize: "16px",
                ...sx,
            }}
            {...otherProps}
        >
            {text}
        </Button>
    );
}
