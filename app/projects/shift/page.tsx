import Button from "components/Button";
import { DarkCard } from "components/DarkCard";
import { FrostedWindowLayout } from "components/FrostedWindowLayout";
import { Icon } from "components/Icon";
import siteMetadata from "metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Shift",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FrostedWindowLayout
        title="Shift"
        position="Freelance Software Engineering"
        image="/img/shift.png"
        imageColor="black"
        startDate="March 2023"
        endDate="Present"
        tags={[
          <Icon
            noStyle
            src="/icon/gcloud.svg"
            size="medium"
            alt="Google Cloud"
            key="gcloud"
          />,
          <Icon
            noStyle
            src="/icon/javascript.svg"
            size="medium"
            alt="JavaScript"
            key="js"
          />,
          <Icon
            noStyle
            src="/icon/react.svg"
            size="medium"
            alt="React / React Native"
            key="react"
          />,
          <Icon
            noStyle
            src="/icon/typescript.svg"
            size="medium"
            alt="TypeScript"
            key="ts"
          />,
        ]}
        className="justify-between"
      >
        <DarkCard title="Description">
          <p>
            Shift is a free and open source web and mobile application that
            allows ambulance companies to manage their employees and schedule
            shifts. This project was created to address the need for a modern
            and intuitive interface that scales with the needs of the company.
          </p>

          <p>
            I am working on this project as a freelance software engineer for a
            local ambulance company. I am responsible for the design,
            development, and deployment of the application.
          </p>

          <p>
            Check out the repository below to see the code for this project.
          </p>
        </DarkCard>
        <DarkCard title="More">
          <div className="space-x-5">
            <Button href="https://github.com/Brenden-Smith/shift">
              Repository
            </Button>
          </div>
        </DarkCard>
      </FrostedWindowLayout>
    </div>
  );
}
