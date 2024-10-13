import { DarkCard } from "components/DarkCard";
import { Icon } from "components/Icon";
import Button from "components/Button";
import siteMetadata from "metadata";
import { Metadata } from "next";
import PageLayout from "components/PageLayout";
import down from "public/img/down.jpg";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Down",
};

export default function Page() {
  return (
    <PageLayout
      title="Down"
      items={[
        {
          position: "Lead Software Engineer",
          startDate: "December 2021",
          endDate: "January 2022",
        },
        {
          position: "Software Engineering Intern",
          startDate: "June 2021",
          endDate: "August 2021",
        },
      ]}
      image={down}
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
    >
      <DarkCard title="Description">
        <h4>Lead Software Engineer</h4>
        <p>
          Down is a social media startup that aims to connect users with events
          going on in their area. I was responsible for the development of the
          back-end and cloud infrastructure. As a lead, I was also responsible
          for the technical direction of the back-end of the project, and I
          managed a team of engineers, performing code reviews, overseeing
          projects, and providing technical guidance. We designed scalable
          back-end services, including cloud functions, user authentication, and
          databases using Google Cloud to be implemented in the mobile
          application.
        </p>
        <h4>Software Engineering Intern</h4>
        <p>
          I started out on the team as a front-end software engineering intern
          in June 2021 for the alpha development phase, and I was promoted to
          lead software engineer in December 2022 for the beta development
          phase.
        </p>
      </DarkCard>
      <DarkCard title="More">
        <Button href="https://joindown.com">Website</Button>
      </DarkCard>
    </PageLayout>
  );
}
