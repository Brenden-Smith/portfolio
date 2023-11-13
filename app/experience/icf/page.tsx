import { FrostedWindowLayout } from "components/FrostedWindowLayout";
import { Icon } from "components/Icon";
import { DarkCard } from "components/DarkCard";
import siteMetadata from "metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | ICF",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FrostedWindowLayout
        title="ICF"
        items={[
          {
            position: "Software Engineer",
            startDate: "October 2023",
            endDate: "Present",
          },
        ]}
        image="/img/icf.png"
        imageColor="white"
        tags={[
          <Icon
            noStyle
            src="/icon/aws.svg"
            size="medium"
            alt="AWS"
            key="aws"
          />,
          <Icon src="/icon/react.svg" size="large" alt="React" key="react" />,
        ]}
      >
        <DarkCard title="Description">
          <p>
            Developing a modern experience for the National Youth in Transition
            Database with Next.js, React, and AWS.
          </p>
        </DarkCard>
      </FrostedWindowLayout>
    </div>
  );
}
