import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../redux/reducers/settingsSlice";
import { FormControl, FormLabel, Typography } from "@mui/material";
import { Done } from "@mui/icons-material";
import { toast } from "react-toastify";
import { toastConfig } from "../config/toastConfig";
import "react-toastify/dist/ReactToastify.css";
import VerticalCenter from "../layouts/VerticalCenter";
import SettingsForm from "../components/SettingsForm";
import CButton from "../components/CButton";

export default function Home() {
  const [isFormModified, setFormModified] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  const form = useForm();
  const { control, handleSubmit, setValue, watch, formState } = form;

  useEffect(() => {
    setValue("totalQuestion", settings.totalQuestion);
    setValue("level", settings.level);
  }, [setValue, settings]);

  useEffect(() => {
    const isModified =
      watch("totalQuestion") !== settings.totalQuestion || watch("level") !== settings.level;
    setFormModified(isModified);
    if (isModified) setIsSaved(false);
  }, [formState, watch, settings]);

  const onSubmit = (data) => {
    dispatch(update(data));
    setIsSaved(true);
    toast.info("Settings saved", toastConfig);
  };

  return (
    <VerticalCenter>
      <Typography
        variant="h2"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          width: "300px",
          color: "#2196f3",
        }}
      >
        Settings
      </Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormLabel sx={{ my: 1 }}>Total Questions:</FormLabel>
        <Controller
          name="totalQuestion"
          control={control}
          defaultValue={settings.totalQuestion}
          render={(props) => (
            <SettingsForm
              {...props}
              options={["5", "10", "15"]}
              color="primary"
              name="totalQuestion"
              watch={watch}
              setValue={setValue}
            />
          )}
        />

        <FormLabel sx={{ my: 1 }}>Level:</FormLabel>
        <Controller
          name="level"
          control={control}
          defaultValue={settings.level}
          render={(props) => (
            <SettingsForm
              {...props}
              options={["Explorer 2", "Navigator 1", "Navigator 2", "Navigator 3"]}
              color="primary"
              name="level"
              watch={watch}
              setValue={setValue}
            />
          )}
        />
        <CButton
          text={isSaved ? "Saved" : "save"}
          type="Sumbit"
          sx={{ mt: 1.5 }}
          disabled={!isFormModified}
          startIcon={isSaved ? <Done /> : null}
        />
      </FormControl>
      <CButton text="Go Home" onClick={() => navigate("/")} />
    </VerticalCenter>
  );
}
