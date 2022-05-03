import { Stack, Typography } from "@mui/material";
import { ProgressBarItem } from "./ProgressBarItem";

export function Languages() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4" sx={{ color: "white" }}>
        Languages
      </Typography>
      <ProgressBarItem title="C++" value={60} />
      <ProgressBarItem title="CSS" value={90} />
      <ProgressBarItem title="HTML" value={90} />
      <ProgressBarItem title="Java" value={70} />
      <ProgressBarItem title="JavaScript" value={90} />
      <ProgressBarItem title="Python" value={80} />
      <ProgressBarItem title="Swift" value={40} />
      <ProgressBarItem title="TypeScript" value={95} />
    </Stack>
  );
}