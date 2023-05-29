import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ShimmerButton = styled(Button)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: "0px 0px 20px 5px rgba(51, 25, 79, .30)",
    "&:after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-50%",
        width: "200%",
        height: "100%",
        background: `linear-gradient(to right, transparent, rgba(211, 211, 211, 0.4), transparent)`,
        backgroundSize: "200% 100%",
        animation: "$shimmer 5s infinite linear",
    },
    "@keyframes shimmer": {
        "0%": {
            backgroundPosition: "-200% 0",
        },
        "100%": {
            backgroundPosition: "200% 0",
        },
    },
}));

export default ShimmerButton;
