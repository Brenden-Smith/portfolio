import { DarkCard } from "../components/DarkCard";
import Skills from "./Skills";
import siteMetadata from "metadata";
import { Metadata } from "next";
import IconButton from "components/IconButton";
import PageLayout from "components/PageLayout";
import me from "public/img/me.jpg";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith",
};

export default function Page() {
  return (
    <PageLayout
      title="Brenden Smith"
      items={[
        {
          position: "Software Engineer",
        },
      ]}
      image={me}
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
          based in the United States. Feel free to reach out to me via email or
          LinkedIn!
        </p>
        <h4>Education</h4>
        <p>
          I received my <b>Bachelor{`'`}s of Science</b> in{" "}
          <b>Computer Science</b> from{" "}
          <b>California State University, Long Beach</b> in May 2023.
        </p>
        <h4>Work</h4>
        <p>
          Currently, I am a full time <b>React Developer</b> at ICF, where I am
          developing a modernized experience for the National Youth in
          Transition Database. Additionally, I am a <b>Software Engineer</b> at{" "}
          <b>Handle Delivery</b> where I develop and maintain back-end resources
          to support the company
          {`'`}s operations, as well as the customer mobile application,
          employee mobile application, and administrative web application.
        </p>
        <p>
          Formerly, I was an <b>Analyst Software Engineer</b> at Goldman Sachs,
          where I built enterprise grade financial applications with AWS, Java,
          and React.
        </p>
      </DarkCard>
      <Skills />
    </PageLayout>
  );
}
