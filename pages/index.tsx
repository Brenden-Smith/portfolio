import Head from "next/head";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Email, GitHub } from "@mui/icons-material";
import { FrostedWindowLayout, Icon } from "../lib/components";
import dynamic from "next/dynamic";

export default function Page() {
  const Skills = dynamic(() => import("../lib/components/about/Skills"), {
    ssr: false,
    loading: () => <CircularProgress />,
  });

  return (
    <>
      <Head>
        <title>Brenden Smith</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Brenden Smith"
          position="Software Engineer"
          image="https://avatars.githubusercontent.com/u/61305154?v=4"
          tags={[
            <IconButton
              sx={{
                color: "white",
              }}
              href="mailto:contact@brenden-smith.com"
              target="_blank"
              key="email"
            >
              <Tooltip
                title={<Typography>Email</Typography>}
                placement="top"
                arrow
              >
                <Email
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              </Tooltip>
            </IconButton>,
            <IconButton
              sx={{
                color: "white",
              }}
              href="https://www.linkedin.com/in/brenden-s-smith"
              target="_blank"
              key="linkedin"
            >
              <Icon
                src="/icon/linkedin.svg"
                size="medium"
                alt="LinkedIn"
                noStyle
              />
            </IconButton>,
            <IconButton
              sx={{
                color: "white",
              }}
              href="https://github.com/Brenden-Smith"
              target="_blank"
              key="github"
            >
              <Tooltip
                title={<Typography>GitHub</Typography>}
                placement="top"
                arrow
              >
                <GitHub
                  fontSize="large"
                  sx={{
                    fontSize: "3rem",
                  }}
                />
              </Tooltip>
            </IconButton>,
          ]}
        >
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="About Me" />
            <CardContent>
              Hello there! My name is Brenden Smith and I am a software engineer
              based in the United States. I am currently a <b>senior</b> at{" "}
              <b>California State University, Long Beach</b>, where I am
              pursuing a <b>Bachelor{`'`}s of Science</b> in{" "}
              <b>Computer Science</b>. I am also a <b>Software Engineer</b> at{" "}
              <b>Handle Delivery</b> where I develop and maintain administrative
              and back-end resources to support the company
              {`'`}s operations. Formerly, I was a{" "}
              <b>Software Engineer Intern</b> at <b>Goldman Sachs</b>, where I
              worked on the RIA Engineering team.
              <div style={{ height: "10px" }} />
              Feel free to reach out to me via email or LinkedIn!
            </CardContent>
          </Card>
          <Skills />
        </FrostedWindowLayout>
      </div>
    </>
  );
}
