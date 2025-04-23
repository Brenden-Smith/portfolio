import { Icon } from "components/Icon";
import { DarkCard } from "components/DarkCard";
import siteMetadata from "metadata";
import { Metadata } from "next";
import PageLayout from "components/PageLayout";
import goldman from "public/img/goldman.png";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Goldman Sachs",
};

export default function Page() {
  return (
    <PageLayout
      title="Goldman Sachs"
      items={[
        {
          position: "Analyst Software Engineer",
          startDate: "July 2023",
          endDate: "October 2023",
        },
        {
          position: "Software Engineer Intern",
          startDate: "June 2022",
          endDate: "August 2022",
        },
      ]}
      image={goldman}
      tags={[
        <Icon noStyle src="/icon/aws.svg" size="medium" alt="AWS" key="aws" />,
        <Icon
          noStyle
          src="/icon/java.svg"
          size="medium"
          alt="Java"
          key="java"
        />,
        <Icon src="/icon/react.svg" size="large" alt="React" key="react" />,
        <Icon noStyle src="/icon/sql.svg" size="medium" alt="SQL" key="sql" />,
      ]}
    >
      <DarkCard title="Description">
        <h4>Analyst Software Engineer</h4>
        <p>
          Developed enterprise-grade financial tools using scalable Java-based
          microservices hosted on AWS, complemented by intuitive front ends
          crafted with React. Contributed to the migration of legacy systems to
          cloud infrastructure, aiming to enhance scalability and streamline
          operational costs.
        </p>
        <h4>Software Engineering Intern</h4>
        <p>
          Selected as part of 1.35% of an applicant pool of 236,000 candidates
          for a summer internship at the company, over the summer I worked as a
          back-end software engineer on the RIA Engineering team in the Global
          Markets division. I worked on project that directly benefited the team
          and the company as a whole, and I was able to learn a lot about the
          company and the industry as a whole. I was also able to learn a lot
          about the company{`'`}s culture and values, and learn from talented
          software engineers. In my project, I utilized Java, Spring, SQL, and
          Amazon Web Services.
        </p>
      </DarkCard>
    </PageLayout>
  );
}
