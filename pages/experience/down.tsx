import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | Down</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Down"
          position="Lead Software Engineer"
          image="/img/down.jpg"
          startDate="June 2021"
          endDate="January 2022"
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
              src="/icon/typescript.svg"
              size="medium"
              alt="TypeScript"
              key="ts"
            />,
          ]}
          className="justify-between"
        >
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="Description" />
            <CardContent>
              Down is a social media startup that aims to connect users with
              events going on in their area. I was responsible for the
              development of the back-end and cloud infrastructure. As a lead, I
              was also responsible for the technical direction of the back-end
              of the project, and I managed a team of engineers, performing code
              reviews, overseeing projects, and providing technical guidance. We
              designed scalable back-end services, including cloud functions,
              user authentication, and databases using Google Cloud to be
              implemented in the mobile application.
              <div style={{ height: "16px" }} />I started out on the team as a
              front-end software engineering intern in June 2021 for the alpha
              development phase, and I was promoted to lead software engineer in
              December 2022 for the beta development phase.
            </CardContent>
          </Card>
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="More" />
            <CardContent>
              <Button
                variant="contained"
                href="https://joindown.com"
                target="_blank"
              >
                Website
              </Button>
            </CardContent>
          </Card>
        </FrostedWindowLayout>
      </div>
    </>
  );
}
