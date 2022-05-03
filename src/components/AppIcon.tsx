import { ButtonBase, Tooltip, Typography } from "@mui/material";
import React from "react";
import "../styles.css";

export function AppIcon(props: any) {
  
  const { item } = props;

  return (
    <div
      style={{
        borderRadius: "25px",
        backgroundColor: "white",
        margin: "15px",
        overflow: "hidden",
      }}
    >
      <Tooltip
        title={<Typography variant="h6">{item.title}</Typography>}
        placement="top"
        arrow
      >
        <ButtonBase
          className="AppIcon-container"
          sx={(theme) => ({ 
            backgroundImage: `url(${item.image})`,
            [theme.breakpoints.between('sm', 'xl')]: {
              width: props.large ? "200px" : "100px",
              height: props.large ? "200px" : "100px",
            },
            [theme.breakpoints.down('sm')]: {
              width: props.large === true ? "150px" : "75px",
              height: props.large === true ? "150px" : "75px",
            },
          })}
          {...props}
        />
      </Tooltip>
    </div>
  );
}