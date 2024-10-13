import { Icon } from "components/Icon";
import { DarkCard } from "components/DarkCard";
import siteMetadata from "metadata";
import { Metadata } from "next";
import PageLayout from "components/PageLayout";
import icf from "public/img/icf.png";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | ICF",
};

export default function Page() {
  return (
    <PageLayout
      title="ICF"
      items={[
        {
          position: "Software Engineer",
          startDate: "October 2023",
          endDate: "Present",
        },
      ]}
      image={icf}
      imageColor="white"
      tags={[
        <Icon noStyle src="/icon/aws.svg" size="medium" alt="AWS" key="aws" />,
        <Icon src="/icon/react.svg" size="large" alt="React" key="react" />,
      ]}
    >
      <DarkCard title="Description">
        <p>
          Collaborated with the team to create a modern experience for the
          National Youth in Transition Database by developing front-end
          solutions with Next.js, ensuring compliance with Section 508
          accessibility standards. Utilized Tanstack Query and Tanstack Table,
          aligning with USWDS user interface guidelines and Airbnb coding
          conventions to produce high-quality software components. Integrated
          the database and cloud resources to improve application usability and
          accessibility. Developed and implemented detailed test suites using
          Jest, bolstering application stability and reliability. Contributed to
          the code review process, upholding code quality and consistency with
          established coding standards.
        </p>
      </DarkCard>
    </PageLayout>
  );
}
