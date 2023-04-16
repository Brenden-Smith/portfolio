import Head from "next/head";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";
import { DarkCard } from "../../lib/components/DarkCard";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | Dataniz</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Dataniz"
          position="Freelance Software Engineering"
          image="/img/dataniz.png"
          imageColor="black"
          startDate="January 2023"
          endDate="Present"
          tags={[
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
          className="justify-between"
        >
          <DarkCard title="Description">
            <CardContent>
              Dataniz is a website that allows users to generate IoT data.
              <div style={{ height: "16px" }} />
              I developed the middle end of the application, primarily working with the back end
              team to integrate an existing REST API into the front end with performance, efficiency,
              security, and cost in mind. I also developed the authentication flow on the front end, and
              worked with the design and front end teams to create a clean and intuitive user interface that complements
              the back end.
            </CardContent>
          </DarkCard>
          {/* <DarkCard title="More">
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
          </DarkCard> */}
        </FrostedWindowLayout>
      </div>
    </>
  );
}
