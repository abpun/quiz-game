import React from "react";
import { Button, FormControlLabel, Grid, RadioGroup } from "@mui/material";

const SettingsForm = ({ field, watch, setValue, options, color, name }) => {
    return (
        <RadioGroup
            {...field}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {options.map((option, index) => (
                <FormControlLabel
                    key={index}
                    value={option}
                    sx={{ marginX: "0" }}
                    control={
                        <Button
                            color={color}
                            size="small"
                            sx={{
                                borderRadius: "0px",
                                width: "120px",
                            }}
                            variant={
                                watch(name) === option
                                    ? "contained"
                                    : "outlined"
                            }
                            onClick={() => setValue(name, option)}
                        >
                            {option}
                        </Button>
                    }
                />
            ))}
        </RadioGroup>
    );
};

export default SettingsForm;
