import {
  Avatar,
  Button,
  Divider,
  Grid,
  Hidden,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AppIcon } from "./AppIcon";
import "../styles.css";
import projects from "../assets/data/projects";
import work from "../assets/data/work";
import { AppDetails } from "./AppDetails";
import ProfilePicture from "../assets/img/profile.jpg";
import { Box } from "@mui/system";
import { Languages } from "./Languages";
import { Frameworks } from "./Frameworks";
import { About } from "./About";

export function AppGroup() {
  const [selected, setSelected] = useState<any>("null");
  const [[page, direction], setPage] = useState([0, 0]);

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };


  const paginate = (newDirection: number) => {
    const n = (page + newDirection) % 3;
    if (n < 0) setPage([2, newDirection]);
    else setPage([(page + newDirection) % 3, newDirection]);
  };

  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.down("sm"));

  async function update(newSel: any) {
    if (selected) {
      setSelected(null);
      setTimeout(() => {
        setSelected(newSel);
      }, 500);
    } else {
      setSelected(newSel);
    }
  }

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        margin: "30px",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AnimatePresence>
          {selected === "null" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100vw",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={ProfilePicture}
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      height: "100px",
                      width: "100px",
                    },
                    [theme.breakpoints.up("lg")]: {
                      height: "200px",
                      width: "200px",
                    },
                  })}
                />
                <Stack direction="column">
                  <Typography
                    variant={!query ? "h1" : "h2"}
                    sx={{ color: "white" }}
                  >
                    Brenden Smith
                  </Typography>
                  <Button
                    sx={{
                      color: "white",
                      borderColor: "white",
                      "&:hover": { borderColor: "white" },
                    }}
                    variant="outlined"
                    onClick={() => update("about")}
                  >
                    <Typography variant="h6">Open "System Specs"</Typography>
                  </Button>
                </Stack>
              </Stack>
            </motion.div>
          ) : selected === "about" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                position: !query ? "absolute" : "relative",
                top: !query ? "40%" : undefined,
                left: !query ? "50%" : undefined,
                transform: !query ? "translate(-50%, -50%)" : undefined,
                width: "100vw",
                justifyContent: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                sx={{
                  width: "100vw",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={ProfilePicture}
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      height: "100px",
                      width: "100px",
                    },
                    [theme.breakpoints.up("lg")]: {
                      height: "200px",
                      width: "200px",
                    },
                  })}
                />
                <Stack direction="column">
                  <Typography
                    variant={!query ? "h1" : "h2"}
                    sx={{ color: "white" }}
                  >
                    Brenden Smith
                  </Typography>
                  <Button
                    sx={{
                      color: "white",
                      borderColor: "white",
                      "&:hover": { borderColor: "white" },
                    }}
                    variant="outlined"
                    onClick={() => update("null")}
                  >
                    <Typography variant="h6">Close "System Specs"</Typography>
                  </Button>
                </Stack>
              </Stack>
              <Hidden smDown>
                <Grid
                  container
                  sx={{ width: "50%", margin: "100px" }}
                  wrap="nowrap"
                >
                  <Grid
                    item
                    className="FrostedWindow-container"
                    xs={6}
                    sx={{ margin: "15px", padding: "30px" }}
                  >
                    <About />
                  </Grid>
                  <Grid
                    item
                    className="FrostedWindow-container"
                    xs={6}
                    sx={{ margin: "15px", padding: "30px" }}
                  >
                    <Languages />
                  </Grid>
                  <Grid
                    item
                    className="FrostedWindow-container"
                    xs={6}
                    sx={{ margin: "15px", padding: "30px" }}
                  >
                    <Frameworks />
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <div
                  className="FrostedWindow-container"
                  style={{
                    width: "80vw",
                    height: "40vh",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    margin: "30px",
                    padding: "30px",
                  }}
                >
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={page}
                      custom={direction}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -10000) {
                          paginate(1);
                        } else if (swipe > 10000) {
                          paginate(-1);
                        }
                      }}
                    >
                      {page === 0 ? (
                        <About />
                      ) : page === 1 ? (
                        <Languages />
                      ) : page === 2 ? (
                        <Frameworks />
                      ) : null}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    justifyContent: "center",
                    width: "100%",
                    display: "flex",
                    marginTop: "-30px"
                  }}
                >
                  {"<  Swipe  >"}
                </Typography>
              </Hidden>
            </motion.div>
          ) : (
            selected && <AppDetails item={selected} />
          )}
        </AnimatePresence>
      </div>
      <Grid
        container
        className="AppGroup-container"
        zeroMinWidth
        wrap="nowrap"
        sx={{ overflow: "hidden", width: "100%" }}
        component="footer"
      >
        <div
          style={{
            overflowX: query ? "scroll" : undefined,
            flexDirection: "row",
            display: "flex",
            overflowY: "hidden",
          }}
        >
          <Grid item sx={{ width: "fit-content" }}>
            <motion.div layoutId="home">
              <AppIcon
                item={{
                  title: "About",
                  image: require("../assets/img/profile.jpg"),
                }}
                onClick={() => update("null")}
              />
            </motion.div>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: 5, margin: "15px" }}
          />
          {work.map((item) => (
            <Grid item sx={{ width: "fit-content" }}>
              <motion.div layoutId={item.title}>
                <AppIcon onClick={() => update(item)} item={item} />
              </motion.div>
            </Grid>
          ))}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderRightWidth: 5, margin: "15px" }}
          />
          {projects.map((item) => (
            <Grid item sx={{ width: "fit-content" }}>
              <motion.div layoutId={item.title}>
                <AppIcon
                  onClick={() => update(item)}
                  item={item}
                  size="100px"
                />
              </motion.div>
            </Grid>
          ))}
        </div>
      </Grid>
    </div>
  );
}


