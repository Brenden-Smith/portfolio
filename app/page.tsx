import Head from "next/head";
import { DarkCard } from "../components/DarkCard";
import { FrostedWindowLayout } from "../components/FrostedWindowLayout";
import Skills from "./Skills";
import siteMetadata from "metadata";
import { Metadata } from "next";
import IconButton from "components/IconButton";
import Tooltip from "components/Tooltip";
import { Icon } from "components/Icon";

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
          title="Brenden Smith"
          position="Software Engineer"
          image="https://avatars.githubusercontent.com/u/61305154?v=4"
          tags={[
            <IconButton
              href="mailto:contact@brenden-smith.com"
              key="email"
              icon={{
                src: "/icon/email.svg",
                size: "medium",
                alt: "Email",
                color: "white",
                noStyle: true,
              }}
            />,
            <IconButton
              href="https://www.linkedin.com/in/brenden-s-smith"
              key="linkedin"
              icon={{
                src: "/icon/linkedin.svg",
                size: "medium",
                alt: "LinkedIn",
                noStyle: true,
              }}
            />,
            <IconButton
              href="https://github.com/Brenden-Smith"
              key="github"
              icon={{
                src: "/icon/github.svg",
                size: "medium",
                alt: "GitHub",
                noStyle: true,
              }}
            />,
          ]}
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
