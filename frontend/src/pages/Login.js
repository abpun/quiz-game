import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Lock, LoginOutlined } from "@mui/icons-material";
import http from "../config/http";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  const onSubmit = (data) => {
    http
      .post("/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          const userData = {
            isLoggedIn: true,
            user: res.data?.userDetails,
            token: res.data?.session,
          };
          dispatch(login(userData));
          localStorage.userData = JSON.stringify(userData);

          alert(res.data?.message);
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
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
        <Avatar style={{ backgroundColor: "#6499E9" }}>
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
            error={errors?.username}
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
            error={errors?.password}
            helperText={errors.password?.message}
          />
        </FormControl>
        <FormControl fullWidth>
          <Button
            type="submit"
            variant="contained"
            style={{ margin: "8px 0" }}
            startIcon={<LoginOutlined />}
            fullWidth
          >
            Login
          </Button>
        </FormControl>
      </form>
      <Typography sx={{ mb: 3 }}>
        <Link href="#" style={{ textDecoration: "none" }}>
          Forget Password
        </Link>
      </Typography>
      <Typography>
        Not a user?&nbsp;
        <Link to="/register">Create Account</Link>
      </Typography>
    </Paper>
  );
};

export default Login;
