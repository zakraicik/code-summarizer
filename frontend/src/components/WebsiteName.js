import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const ShimmerTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(to right, transparent, rgba(40,17,66, 1), transparent)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  backgroundSize: "200% 100%",
  animation: "shimmer 10s infinite linear",
  "@keyframes shimmer": {
    "0%": {
      backgroundPosition: "-200% 0",
    },
    "100%": {
      backgroundPosition: "200% 0",
    },
  },
}));

function WebsiteName() {
  return (
    <ShimmerTypography variant="h1" sx={{ marginBottom: "10px" }}>
      Title
    </ShimmerTypography>
  );
}

export default WebsiteName;
