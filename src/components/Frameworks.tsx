import { Stack, Typography } from "@mui/material";
import { ProgressBarItem } from "./ProgressBarItem";

export function Frameworks() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4" sx={{ color: "white" }}>
        Frameworks & Tools
      </Typography>
      <ProgressBarItem title="Flutter" value={65} />
      <ProgressBarItem title="Firebase" value={95} />
      <ProgressBarItem title="Google Cloud" value={80} />
      <ProgressBarItem title="Node.js" value={80} />
      <ProgressBarItem title="React Native" value={90} />
      <ProgressBarItem title="React" value={95} />
    </Stack>
  );
}