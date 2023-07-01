import Head from "next/head";
import { DarkCard } from "../components/DarkCard";
import { FrostedWindowLayout } from "../components/FrostedWindowLayout";
import Skills from "./Skills";
import siteMetadata from "metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith",
};


export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          tags={[]}
          title="Brenden Smith"
          position="Software Engineer"
          image="https://avatars.githubusercontent.com/u/61305154?v=4"
          // tags={[
          //   <IconButton
          //     sx={{
          //       color: "white",
          //     }}
          //     href="mailto:contact@brenden-smith.com"
          //     target="_blank"
          //     key="email"
          //   >
          //     <Tooltip
          //       title={<Typography>Email</Typography>}
          //       placement="top"
          //       arrow
          //     >
          //       <Email
          //         sx={{
          //           fontSize: "3rem",
          //         }}
          //       />
          //     </Tooltip>
          //   </IconButton>,
          //   <IconButton
          //     sx={{
          //       color: "white",
          //     }}
          //     href="https://www.linkedin.com/in/brenden-s-smith"
          //     target="_blank"
          //     key="linkedin"
          //   >
          //     <Icon
          //       src="/icon/linkedin.svg"
          //       size="medium"
          //       alt="LinkedIn"
          //       noStyle
          //     />
          //   </IconButton>,
          //   <IconButton
          //     sx={{
          //       color: "white",
          //     }}
          //     href="https://github.com/Brenden-Smith"
          //     target="_blank"
          //     key="github"
          //   >
          //     <Tooltip
          //       title={<Typography>GitHub</Typography>}
          //       placement="top"
          //       arrow
          //     >
          //       <GitHub
          //         fontSize="large"
          //         sx={{
          //           fontSize: "3rem",
          //         }}
          //       />
          //     </Tooltip>
          //   </IconButton>,
          // ]}
        >
          <DarkCard title="About Me">
            <p>
              Hello there! My name is Brenden Smith and I am a software engineer
              based in the United States. I am currently a{" "}
              <b>Software Engineer</b> at <b>Handle Delivery</b> where I develop
              and maintain administrative and back-end resources to support the
              company
              {`'`}s operations. Formerly, I was a{" "}
              <b>Software Engineer Intern</b> at <b>Goldman Sachs</b>, where I
              worked on the RIA Engineering team. I received my{" "}
              <b>Bachelor{`'`}s of Science</b> in <b>Computer Science</b> from{" "}
              <b>California State University, Long Beach</b> in May 2023.
            </p>

            <p>Feel free to reach out to me via email or LinkedIn!</p>
          </DarkCard>
          <Skills />
        </FrostedWindowLayout>
      </div>
    </>
  );
}
