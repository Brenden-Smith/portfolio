import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";
import { DarkCard } from "../../lib/components/DarkCard";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | Handle Delivery</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Handle Delivery"
          position="Software Engineer"
          image="/img/handle.jpg"
          startDate="February 2022"
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
              Handle Delivery is a startup based out of the University of
              Southern California that provides snack delivery services to
              students on college campuses across the country . I am currently
              working as a software engineer on the team, and I am responsible
              for developing the company{`'`} back-end infrastructure on Google
              Cloud and administrative/operations tools.
              <div style={{ height: "16px" }} />I developed a dashboard that
              allows the company and campus managers to view and manage the
              company{`'`}s operations, including real-time analytics, order
              management, user management, and team management.
              <div style={{ height: "16px" }} />
              Additionally, I rebuilt the customer application, not including
              the design, from the ground up to provide a more performant and
              responsive experience, increasing customer retention by 20%.
            </CardContent>
          </DarkCard>
          <DarkCard title="More">
            <CardContent>
              <Button
                variant="contained"
                href="https://handledelivery.com"
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
