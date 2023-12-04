import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AppRegistration, AppRegistrationOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import "react-toastify/dist/ReactToastify.css";
import http from "../config/http";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  const onSubmit = (data) => {
    setLoading(true);
    http
      .post("/api/register", data)
      .then((data) => {
        setLoading(false);
        if (data.status === 201) {
          toast.success(data.data.message, toastConfig);
          navigate("/login");
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
      sx={{
        padding: "20px",
        width: 380,
        margin: "30px auto",
      }}
    >
      <Grid align="center" sx={{ mb: 3 }}>
        <Avatar style={{ backgroundColor: "#6499E9" }}>
          <AppRegistrationOutlined />
        </Avatar>
        <Typography variant="h4">Register</Typography>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel shrink={true} sx={{ background: "white", px: 0.75 }}>
            Name
          </InputLabel>
          <TextField
            {...register("name", {
              required: {
                value: "true",
                message: "Name required",
              },
            })}
            placeholder="Ex. John Doe"
            variant="outlined"
            error={errors.name}
            helperText={errors.name?.message}
            sx={{ mb: 2 }}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel shrink={true} sx={{ background: "white", px: 0.75, ml: -0.5 }}>
            Username
          </InputLabel>
          <TextField
            {...register("username", {
              required: {
                value: "true",
                message: "Username required",
              },
            })}
            placeholder="Ex. your_username"
            variant="outlined"
            error={errors.username}
            helperText={errors.username?.message}
            sx={{ mb: 2 }}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel shrink={true}>Level</InputLabel>
          <Select
            {...register("level")}
            defaultValue="Explorer 2"
            label="Level"
            variant="outlined"
            sx={{ mb: 2 }}
          >
            <MenuItem value="Explorer 2">Class 2</MenuItem>
            <MenuItem value="Navigator 1">Class 3</MenuItem>
            <MenuItem value="Navigator 2">Class 4</MenuItem>
            <MenuItem value="Navigator 3">Class 5</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel shrink={true} sx={{ background: "white", px: 0.75, ml: -0.5 }}>
            Password
          </InputLabel>
          <TextField
            {...register("password", {
              required: {
                value: "true",
                message: "Password required",
              },
            })}
            placeholder="Enter your password"
            type="password"
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
            sx={{ mb: 2 }}
          />
        </FormControl>
        <LoadingButton
          type="submit"
          loading={loading}
          variant="contained"
          loadingPosition="start"
          style={{ margin: "8px 0" }}
          startIcon={<AppRegistration />}
          fullWidth
        >
          Register
        </LoadingButton>
      </form>

      <Typography>
        Already a user&nbsp;
        <Link to="/login">Login</Link>
      </Typography>
    </Paper>
  );
};

export default Register;
