import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";

export const StyledLink = styled(RouterLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
  },
}));
