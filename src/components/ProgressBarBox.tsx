import { Box, LinearProgress, Typography, Stack } from "@mui/material";

export function ProgressBarBox({ title, items }: {
  title: string;
  items: {
    name: string;
    value: number;
  }[];
}) {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4" sx={{ color: "white" }}>
        {title}
      </Typography>
      {items.map((item, index) => (
        <ProgressBarItem title={item.name} value={item.value} key={index} />
      ))}
    </Stack>
  );
}

function ProgressBarItem({
  title,
  value,
  key
}: {
  title: string;
  value: number;
  key: any;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }} key={key}>
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
