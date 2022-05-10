import { Typography } from "@mui/material";
import { info } from "../data";

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
        {info.about.map((item, index) => (
          <li key={index}>
            <Typography variant="body1" sx={{ color: "white" }}>
              {item.text} <b>{item.bold}</b>
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
}