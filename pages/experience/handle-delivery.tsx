import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";

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
            <Icon noStyle src="/icon/gcloud.svg" size="medium" alt="Google Cloud" key="gcloud" />,
            <Icon noStyle src="/icon/javascript.svg" size="medium" alt="JavaScript" key="js" />,
            <Icon noStyle src="/icon/typescript.svg" size="medium" alt="TypeScript" key="ts" />,
          ]}
          className="justify-between"
        >
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="Description" />
            <CardContent>
              Handle Delivery is a startup based out of the University of Southern California that
              provides snack delivery services to students on college campuses. I am currently
              working as a software engineer on the team, and I am responsible for developing
              the company's back-end infrastructure on Google Cloud and administrative/operations tools.
              <div style={{ height: "16px" }} />
              I am currently working on a dashboard that allows the company and campus managers
              to view and manage the company's operations, including real-time analytics, order
              management, user management, and team management.
            </CardContent>
          </Card>
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="More" />
            <CardContent>
              <Button variant="contained" href="https://handledelivery.com" target="_blank">
                Website
              </Button>
            </CardContent>
          </Card>
        </FrostedWindowLayout>
      </div>
    </>
  );
}
