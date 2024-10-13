import { DarkCard } from "components/DarkCard";
import { Icon } from "components/Icon";
import PageLayout from "components/PageLayout";
import siteMetadata from "metadata";
import { Metadata } from "next";
import dataniz from "public/img/dataniz.png";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Dataniz",
};

export default function Page() {
  return (
    <PageLayout
      title="Dataniz"
      items={[
        {
          position: "Software Engineer",
          startDate: "January 2023",
          endDate: "May 2023",
        },
      ]}
      image={dataniz}
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
    >
      <DarkCard title="Description">
        <p>Dataniz is a website that allows users to generate IoT data.</p>
        <p>
          I developed the middle end of the application, primarily working with
          the back end team to integrate an existing REST API into the front end
          with performance, efficiency, security, and cost in mind. I also
          developed the authentication flow on the front end, and worked with
          the design and front end teams to create a clean and intuitive user
          interface that complements the back end.
        </p>
      </DarkCard>
    </PageLayout>
  );
}
