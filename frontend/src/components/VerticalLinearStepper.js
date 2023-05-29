import * as React from "react";
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Button,
    Typography,
} from "@mui/material";
import ShimmerButton from "./ShimmerButton";

const steps = [
    {
        label: "Input",
        description: `Paste code you need summarized into the top box.`,
    },
    {
        label: "Summarize",
        description: "Click the summarize button",
    },
    {
        label: "View",
        description: `View summarized code in bottom box`,
    },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Box>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                <Typography variant="h3">{step.label}</Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography variant="body">{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        {index !== steps.length - 1 && (
                                            <ShimmerButton onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                                                Continue
                                            </ShimmerButton>
                                        )}
                                        {index !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                                                Back
                                            </Button>
                                        )}
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            {activeStep === steps.length && (
                <Box sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Box>
            )}
        </Box>
    );
}
