import React, { useState } from "react";
import LargeInputText from "../components/LargeInputText";
import SummarizedText from "../components/SummarizedText";
import { Box, Typography } from "@mui/material";
import ShimmerButton from "../components/ShimmerButton";
import VerticalLinearStepper from "../components/VerticalLinearStepper";

function SummarizeScreen() {
    const [InputText, setInputText] = useState("Code Here");
    const [SummaraizedText, setSummarizedText] = useState("Summary Displays Here");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const postData = async (url = "", data = {}) => {
        let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

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
        return { summary: content }; // Return an object with a summary key
    };

    const handleClick = async () => {
        const endpoint = "http://127.0.0.1:5000/summarize";

        postData(endpoint, { code: InputText }).then((data) => {
            if (data.error) {
                console.error(`An error occurred: ${data.error}`);
            } else if (data.summary) {
                setSummarizedText(data.summary); // Set summarizedText to data.summary
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
                        <ShimmerButton onClick={handleClick} >
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
