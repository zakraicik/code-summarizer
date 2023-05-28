import React, { useState } from 'react'
import LargeInputText from "../components/LargeInputText";
import SummarizedText from "../components/SummarizedText"
import { Box, Typography } from "@mui/material";
import ShimmerButton from "../components/ShimmerButton";



function SummarizeScreen() {
    const [InputText, setInputText] = useState("");
    const [SummaraizedText, setSummarizedText] = useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    const postData = async (url = '', data = {}) => {

        let apiKey = process.env.REACT_APP_OPENAI_API_KEY;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await response.json();
        const content = jsonResponse.summary.choices[0].message.content;
        return { summary: content }; // Return an object with a summary key
    }


    const handleClick = async () => {
        const endpoint = 'http://127.0.0.1:5000/summarize';

        postData(endpoint, { code: InputText })
            .then(data => {
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

        <Box display="flex" alignItems="flex-start">
            <Box mr={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 0 }}>
                <LargeInputText value={InputText} onChange={handleInputChange} />
                <Box mt={1}>
                    <ShimmerButton onClick={handleClick}>
                        <Typography
                        >
                            Summarize
                        </Typography>
                    </ShimmerButton>
                </Box>
            </Box>
            <Box flexGrow={1} >
                <SummarizedText value={SummaraizedText} />
            </Box>
        </Box>

    );
}

export default SummarizeScreen;
