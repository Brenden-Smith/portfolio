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
        height: "fit-content",
        width: "fit-content",
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
            [theme.breakpoints.up('sm',)]: {
              width: props.large ? "150px" : "100px",
              height: props.large ? "150px" : "100px",
            },
            [theme.breakpoints.down('sm')]: {
              width: props.large === true ? "100px" : "75px",
              height: props.large === true ? "100px" : "75px",
            },
          })}
          {...props}
        />
      </Tooltip>
    </div>
  );
}