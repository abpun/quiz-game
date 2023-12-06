import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

export default function CButton(props) {
  const { text, sx, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      sx={{
        mb: 1,
        width: "180px",
        background: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        fontSize: "16px",
        ...sx,
      }}
      {...otherProps}
    >
      {text}
    </Button>
  );
}
