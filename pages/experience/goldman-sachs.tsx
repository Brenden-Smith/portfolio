import Head from "next/head";
import { Card, CardContent, CardHeader } from "@mui/material";
import { FrostedWindowLayout, Icon } from "../../lib/components";

export default function Page() {
  return (
    <>
      <Head>
        <title>Brenden Smith | Goldman Sachs</title>
      </Head>
      <div className="flex items-center justify-center w-full h-full">
        <FrostedWindowLayout
          title="Goldman Sachs"
          position="Software Engineer Intern"
          image="/img/goldman.png"
          startDate="June 2022"
          endDate="August 2022"
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
              src="/icon/java.svg"
              size="medium"
              alt="Java"
              key="java"
            />,
            <Icon
              src="/icon/spring.svg"
              size="large"
              alt="Spring"
              key="spring"
            />,
            <Icon
              noStyle
              src="/icon/sql.svg"
              size="medium"
              alt="SQL"
              key="sql"
            />,
          ]}
        >
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="Description" />
            <CardContent>
              Selected as part of 1.35% of an applicant pool of 236,000
              candidates for a summer internship at the company, over the summer
              I worked as a back-end software engineer on the RIA Engineering
              team in the Global Markets division. I worked on project that
              directly benefited the team and the company as a whole, and I was
              able to learn a lot about the company and the industry as a whole.
              I was also able to learn a lot about the company's culture and
              values, and I was able to work with some of the most talented
              people in the industry. In my project, I utilized Java, Spring,
              SQL, and Amazon Web Services.
            </CardContent>
          </Card>
        </FrostedWindowLayout>
      </div>
    </>
  );
}
