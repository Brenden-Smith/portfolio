import Button from "components/Button";
import { DarkCard } from "components/DarkCard";
import { Icon } from "components/Icon";
import PageLayout from "components/PageLayout";
import siteMetadata from "metadata";
import { Metadata } from "next";
import thumbo from "public/img/thumbo.png";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Thumbo",
};

export default function Page() {
  return (
    <PageLayout
      title="Thumbo"
      items={[
        {
          position: "Freelance Software Engineer",
          startDate: "May 2022",
          endDate: "November 2022",
        },
      ]}
      image={thumbo}
      imageColor="black"
      tags={[
        <Icon noStyle src="/icon/aws.svg" size="medium" alt="AWS" key="aws" />,
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
          alt="React"
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
    >
      <DarkCard title="Description">
        <p>
          Thumbo is a startup that aims to engage fans at sporting events by
          providing mid-game activities for prizes. I worked with another
          engineer to design the alpha version of the application. I was
          responsible for the development of the back-end and cloud
          infrastructure for the alpha development phase. I designed all of the
          logic for the games, implemented cloud features from AWS and Google
          Cloud, managed the database, created the administrative and operations
          dashboards, and developed microservices to support the application.
        </p>
      </DarkCard>
      <DarkCard title="More">
        <Button href="https://thumbo.app">Website</Button>
      </DarkCard>
    </PageLayout>
  );
}
