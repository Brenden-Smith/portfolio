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
          tags={[
            <Icon src="/icon/aws.svg" size="large" alt="AWS" key="aws"/>,
            <Icon src="/icon/java.svg" size="large" alt="Java" key="java"/>,
            <Icon src="/icon/spring.svg" size="large" alt="Spring" key="spring"/>,
            <Icon src="/icon/sql.svg" size="large" alt="SQL" key="sql"/>,
          ]}
        >
          <Card className="bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-3xl text-white">
            <CardHeader title="Description" />
            <CardContent>
              Hello there! My name is Brenden Smith and I am a software engineer
              based in the United States. I am currently a <b>senior</b> at{" "}
              <b>California State University, Long Beach</b>, where I am
              pursuing a <b>Bachelor{`'`}s of Science</b> in{" "}
              <b>Computer Science</b>. I am also a <b>Software Engineer</b> at{" "}
              <b>Handle Delivery</b> where I develop and maintain administrative
              and back-end resources to support the company
              {`'`}s operations. Formerly, I was a{" "}
              <b>Software Engineer Intern</b> at <b>Goldman Sachs</b>, where I
              worked on the RIA Engineering team.
              <div style={{ height: "10px" }} />
              Feel free to reach out to me via email or LinkedIn!
            </CardContent>
          </Card>
        </FrostedWindowLayout>
      </div>
    </>
  );
}
