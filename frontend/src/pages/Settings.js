import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button, FormControl, FormLabel, Typography } from "@mui/material";
import VerticalCenter from "../layouts/VerticalCenter";
import SettingsForm from "../components/SettingsForm";
import CButton from "../components/CButton";

export default function Home() {
    const navigate = useNavigate();
    const settings = useSelector((state) => state.settings);

    const form = useForm();
    const { control, handleSubmit, setValue, watch } = form;

    useEffect(() => {
        setValue("difficulty", settings.difficulty);
        setValue("level", settings.level);
    }, [setValue, settings]);

    const onSubmit = (data) => {
        console.log(data);
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
                <FormLabel sx={{ my: 1 }}>Difficulty:</FormLabel>
                <Controller
                    name="difficulty"
                    control={control}
                    defaultValue={settings.difficulty}
                    render={(props) => (
                        <SettingsForm
                            {...props}
                            options={["easy", "medium", "hard"]}
                            color="primary"
                            name="difficulty"
                            watch={watch}
                            setValue={setValue}
                        />
                    )}
                />

                <FormLabel sx={{ my: 1 }}>Level</FormLabel>
                <Controller
                    name="level"
                    control={control}
                    defaultValue={settings.level}
                    render={(props) => (
                        <SettingsForm
                            {...props}
                            options={[
                                "Explorer 1",
                                "Navigator 1",
                                "Navigator 2",
                            ]}
                            color="primary"
                            name="level"
                            watch={watch}
                            setValue={setValue}
                        />
                    )}
                />
                <CButton text="Save" type="Sumbit" sx={{ mt: 1.5 }} />
            </FormControl>
            <CButton text="Go Home" onClick={() => navigate("/")} />
        </VerticalCenter>
    );
}
