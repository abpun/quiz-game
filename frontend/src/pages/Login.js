import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Avatar, FormControl, Grid, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { Lock, LoginOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { update } from "../redux/reducers/settingsSlice";
import { StyledLink } from "../config/styles";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import "react-toastify/dist/ReactToastify.css";
import http from "../config/http";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  const onSubmit = (data) => {
    setLoading(true);
    http
      .post("/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.info(res.data?.message, toastConfig);
          const userData = {
            isLoggedIn: true,
            userDetails: res.data?.userDetails,
            token: res.data?.session,
          };
          const settingsData = {
            level: res.data?.userDetails?.level,
            totalQuestion: "5",
          };
          dispatch(update(settingsData));
          dispatch(login(userData));
          localStorage.userData = JSON.stringify(userData);

          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (!err.response) {
          toast.error(err.message, toastConfig);
        } else {
          toast.error(err.response.data?.message, toastConfig);
        }
      });
  };

  return (
    <Paper
      elevation={1}
      style={{
        padding: "20px",
        width: 380,
        margin: "30px auto",
      }}
    >
      <Grid align="center" sx={{ mb: 3 }}>
        <Avatar style={{ backgroundColor: "#2196f3" }}>
          <Lock />
        </Avatar>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel shrink={true} sx={{ background: "white", px: 1 }}>
            Username
          </InputLabel>
          <TextField
            {...register("username", {
              required: {
                value: true,
                message: "Username required",
              },
            })}
            placeholder="Enter User Name"
            variant="outlined"
            error={Boolean(errors?.username)}
            helperText={errors.username?.message}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel shrink={true} sx={{ background: "white", px: 1 }}>
            Password
          </InputLabel>
          <TextField
            {...register("password", {
              required: {
                value: true,
                message: "Password required",
              },
            })}
            type="password"
            placeholder="Enter Password"
            variant="outlined"
            error={Boolean(errors?.password)}
            helperText={errors.password?.message}
          />
        </FormControl>
        <FormControl fullWidth>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingPosition="start"
            style={{ margin: "8px 0" }}
            startIcon={<LoginOutlined />}
            fullWidth
            sx={{ background: "#2196f3" }}
          >
            Login
          </LoadingButton>
        </FormControl>
      </form>
      <Typography sx={{ mb: 3 }}>
        <StyledLink href="#" style={{ color: "#2196f3" }}>
          Forget Password
        </StyledLink>
      </Typography>
      <Typography>
        Not a user?&nbsp;
        <StyledLink to="/register" style={{ color: "#2196f3" }}>
          Create Account
        </StyledLink>
      </Typography>
    </Paper>
  );
};

export default Login;
