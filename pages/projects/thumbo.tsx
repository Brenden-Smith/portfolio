import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";
import { DarkCard } from "../../lib/components/DarkCard";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | Thumbo</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Thumbo"
          position="Freelance Software Engineer"
          image="/img/thumbo.png"
          imageColor="black"
          startDate="May 2022"
          endDate="November 2022"
          tags={[
            <Icon
              noStyle
              src="/icon/aws.svg"
              size="medium"
              alt="AWS"
              key="aws"
            />,
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
              Thumbo is a startup that aims to engage fans at sporting events by
              providing mid-game activities for prizes. I worked with another
              engineer to design the alpha version of the application. I was
              responsible for the development of the back-end and cloud
              infrastructure for the alpha development phase. I designed all of
              the logic for the games, implemented cloud features from AWS and
              Google Cloud, managed the database, created the administrative and
              operations dashboards, and developed microservices to support the
              application.
            </CardContent>
          </DarkCard>
          <DarkCard title="More">
            <CardContent>
              <Button
                variant="contained"
                href="https://thumbo.app"
                target="_blank"
              >
                Website
              </Button>
            </CardContent>
          </DarkCard>
        </FrostedWindowLayout>
      </div>
    </>
  );
}
