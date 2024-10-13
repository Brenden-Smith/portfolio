import Button from "components/Button";
import { DarkCard } from "components/DarkCard";
import { Icon } from "components/Icon";
import PageLayout from "components/PageLayout";
import siteMetadata from "metadata";
import { Metadata } from "next";
import handle from "public/img/handle.jpg";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Handle Delivery",
};

export default function Page() {
  return (
    <PageLayout
      title="Handle Delivery"
      items={[
        {
          position: "Software Engineer",
          startDate: "February 2022",
          endDate: "Present",
        },
      ]}
      image={handle}
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
    >
      <DarkCard title="Description">
        <p>
          Handle Delivery is a startup based out of the University of Southern
          California that provides snack delivery services to students on
          college campuses across the country . I am currently working as a
          software engineer on the team, and I am responsible for developing the
          company{`'`} back-end infrastructure on Google Cloud and
          administrative/operations tools.
        </p>

        <p>
          I developed a dashboard that allows the company and campus managers to
          view and manage the company{`'`}s operations, including real-time
          analytics, order management, user management, and team management.
        </p>

        <p>
          Additionally, I rebuilt the customer application, not including the
          design, from the ground up to provide a more performant and responsive
          experience, increasing customer retention by 20%.
        </p>
      </DarkCard>
      <DarkCard title="More">
        <Button href="https://handledelivery.com">Website</Button>
      </DarkCard>
    </PageLayout>
  );
}
