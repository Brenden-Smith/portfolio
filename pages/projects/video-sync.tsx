import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";
import { DarkCard } from "../../lib/components/DarkCard";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | Video Sync</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Video Sync"
          position="Personal Project"
          image="/img/video.jpg"
          imageColor="black"
          startDate="January 2022"
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
              src="/icon/typescript.svg"
              size="medium"
              alt="TypeScript"
              key="ts"
            />,
          ]}
          className="justify-between"
        >
          <DarkCard>
            <CardHeader title="Description" />
            <CardContent>
              Video Sync is a personal project that I created so that I could
              watch online videos simultaneously with my friends. I was inspired
              to create this project because I wasn{`'`}t happy with the existing
              solutions. I wanted to create a solution that was easy to use, had
              a clean interface, and was free. I created the front-end using
              React/Next.js and the back end using Firebase and Google Cloud.
              <div style={{ height: "16px" }} />
              Check out the application and the repository below!
            </CardContent>
          </DarkCard>
          <DarkCard>
            <CardHeader title="More" />
            <CardContent className="space-x-5">
              <Button
                variant="contained"
                href="https://videosync.brenden-smith.com"
                target="_blank"
              >
                Application
              </Button>

              <Button
                variant="contained"
                href="https://videosync.brenden-smith.com"
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
