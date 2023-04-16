import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";
import { DarkCard } from "../../lib/components/DarkCard";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | FooDood</title>
      </Head>
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
            <CardContent>
              Shift is a free and open source web and mobile application that allows
              ambulance companies to manage their employees and schedule shifts. This project
              was created to address the need for a modern and intuitive interface that scales
              with the needs of the company.
              <div style={{ height: "16px" }} />
              I am working on this project as a freelance software engineer for a local
              ambulance company. I am responsible for the design, development, and deployment
              of the application.
              <div style={{ height: "16px" }} />
              Check out the repository below to see the code for this project.
            </CardContent>
          </DarkCard>
          <DarkCard title="More">
            <CardContent className="space-x-5">
              <Button
                variant="contained"
                href="https://github.com/Brenden-Smith/shift"
                target="_blank"
              >
                Repository
              </Button>
            </CardContent>
          </DarkCard>
        </FrostedWindowLayout>
      </div>
    </>
  );
}
