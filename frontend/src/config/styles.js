import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";

export const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
  },
}));
