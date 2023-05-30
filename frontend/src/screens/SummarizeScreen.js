import React, { useState } from "react";
import LargeInputText from "../components/LargeInputText";
import SummarizedText from "../components/SummarizedText";
import { Box, Typography } from "@mui/material";
import ShimmerButton from "../components/ShimmerButton";
import VerticalLinearStepper from "../components/VerticalLinearStepper";
import { CircularProgress } from "@mui/material"

function SummarizeScreen() {
    const [InputText, setInputText] = useState("print(Hello, World!)");
    const [SummaraizedText, setSummarizedText] = useState(
        "In this code, `print()` is a built-in function in Python used to display output on the screen. The text written inside the parentheses is the message that will be displayed on the screen. In this case, the message is 'Hello, World!'. So, when this code is executed, it will display 'Hello, World!' on the screen."
    );
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const postData = async (url = "", data = {}) => {
        let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

        setIsLoading(true);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": apiKey,
            },
            body: JSON.stringify(data),
        });


        const jsonResponse = await response.json();
        const content = jsonResponse.summary.choices[0].message.content;
        setIsLoading(false);
        return { summary: content };
    };

    const handleClick = async () => {
        const endpoint = "http://127.0.0.1:5000/summarize";

        postData(endpoint, { code: InputText }).then((data) => {
            if (data.error) {
                console.error(`An error occurred: ${data.error}`);
            } else if (data.summary) {
                setSummarizedText(data.summary);
            } else {
                console.error("Unexpected response from the server");
            }
        });
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            minHeight="100vh"
        >
            <Box flexGrow={1} mr={4}>
                <VerticalLinearStepper />
            </Box>

            <Box flexGrow={1} ml={4} display="flex" flexDirection="column">
                <Box position="relative" mb={2}>
                    <LargeInputText value={InputText} onChange={handleInputChange} />
                    <Box position="absolute" bottom={10} right={10}>
                        <ShimmerButton onClick={handleClick} disabled={isLoading}>
                            {isLoading && <CircularProgress color="inherit" size={24} />}
                            <Typography>Summarize</Typography>
                        </ShimmerButton>
                    </Box>
                </Box>
                <Box mt={2}>
                    <SummarizedText value={SummaraizedText} />
                </Box>
            </Box>
        </Box>
    );
}

export default SummarizeScreen;
