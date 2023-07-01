import { FrostedWindowLayout } from "components/FrostedWindowLayout";
import { Icon } from "components/Icon";
import { DarkCard } from "components/DarkCard";
import siteMetadata from "metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Goldman Sachs",
};


export default function Page() {
  return (
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
            noStyle
            src="/icon/sql.svg"
            size="medium"
            alt="SQL"
            key="sql"
          />,
        ]}
      >
        <DarkCard title="Description">
          <p>
            Selected as part of 1.35% of an applicant pool of 236,000 candidates
            for a summer internship at the company, over the summer I worked as
            a back-end software engineer on the RIA Engineering team in the
            Global Markets division. I worked on project that directly benefited
            the team and the company as a whole, and I was able to learn a lot
            about the company and the industry as a whole. I was also able to
            learn a lot about the company{`'`}s culture and values, and learn
            from talented software engineers. In my project, I utilized Java,
            Spring, SQL, and Amazon Web Services.
          </p>
        </DarkCard>
      </FrostedWindowLayout>
    </div>
  );
}
