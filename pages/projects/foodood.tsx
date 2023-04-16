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
          title="FooDood"
          position="CSULB Senior Project"
          image="/img/foodood.png"
          imageColor="black"
          startDate="August 2022"
          endDate="May 2023"
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
              alt="React Native"
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
              FooDood is a mobile application that combines the concept of
              Tinder-swiping with selecting something to eat. Science says that
              it is easier to make a decision when presented with simple options
              such as "yes" or "no" rather than a large list of options. FooDood
              will present users with a list of food options in their area and
              they will be able to swipe left or right on the options to decide
              what to eat.
              <div style={{ height: "16px" }} />
              I worked on this project with a team of 3 other students. I
              developed the back end of the application primarily, including the
              recommendation algorithm, data fetching, and cloud resources. On
              the front end, I worked on performance optimizations and efficient
              data fetching.
              <div style={{ height: "16px" }} />
              Check out the website and repository below!
            </CardContent>
          </DarkCard>
          <DarkCard title="More">
            <CardContent className="space-x-5">
              <Button
                variant="contained"
                href="https://www.foodood.dev"
                target="_blank"
              >
                Website
              </Button>

              <Button
                variant="contained"
                href="https://github.com/Brenden-Smith/foodood"
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
