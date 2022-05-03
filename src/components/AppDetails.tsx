import { Button, Stack, SvgIcon, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { AppIcon } from "./AppIcon";

export function AppDetails({ item }: { item: any }) {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "absolute",
        top: query ? "40%" : "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <motion.div
        layoutId={item.title}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
        }}
        className="FrostedWindow-container"
      >
        <AppIcon disabled item={item} large={true} />
        <motion.div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              maxHeight: query ? "35vh" : undefined,
              overflowY: query ? "scroll" : undefined,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" sx={{ color: "white" }}>
              {item.title}
            </Typography>
            {item.position && (
              <Typography variant="h5" sx={{ color: "white" }}>
                {item.position}
              </Typography>
            )}
            {item.time && (
              <Typography variant="h6" sx={{ color: "white" }}>
                {item.time}
              </Typography>
            )}
            {item.stack && (
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{ marginTop: "15px", marginBottom: "15px" }}
              >
                {item.stack.map((i: Record<string, any>) => (
                  <Tooltip title={i.name} arrow placement="top">
                    <SvgIcon sx={{ color: "white" }} fontSize="large">
                      <i.icon />
                    </SvgIcon>
                  </Tooltip>
                ))}
              </Stack>
            )}

            <ul style={{ marginLeft: "-20px", marginTop: "0px", marginBottom: "0px" }}>
              {item.description.map((i: string) => (
                <li>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {i}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          {item.links && (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{marginTop: "15px"}}
            >
              {item.links.map((i: Record<string, any>) => (
                <Button href={i.link} target="_blank" variant="contained">
                  {i.title}
                </Button>
              ))}
            </Stack>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
