import { Typography } from "@mui/material";

export function About() {
  return (
    <>
      <Typography variant="h4" sx={{ color: "white" }}>
        About
      </Typography>
      <ul
        style={{
          marginLeft: "-20px",
        }}
      >
        <li>
          <Typography variant="body1" sx={{ color: "white" }}>
            Senior Computer Science Student at{" "}
            <b>California State University, Long Beach</b>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" sx={{ color: "white" }}>
            Incoming Engineering Summer Analyst at <b>Goldman Sachs</b>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" sx={{ color: "white" }}>
            Secretary at the <b>Association for Computing Machinery</b>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" sx={{ color: "white" }}>
            Scholar at <b>STEM Advantage</b>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" sx={{ color: "white" }}>
            I am a software engineer with a passion for creating beautiful,
            intuitive, and user-friendly applications.
          </Typography>
        </li>
      </ul>
    </>
  );
}