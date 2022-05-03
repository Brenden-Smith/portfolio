import { Box, LinearProgress, Typography } from "@mui/material";

export function ProgressBarItem({ title, value }: { title: string; value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ minWidth: 100, mr: 1 }}>
        <Typography variant="body1" sx={{ color: "white" }}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", ml: 1 }}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </Box>
  );
}
