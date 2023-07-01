import { DarkCard } from "components/DarkCard";
import { FrostedWindowLayout } from "components/FrostedWindowLayout";
import { Icon } from "components/Icon";
import siteMetadata from "metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Dataniz",
};

export default function Page() {
  return (
    <FrostedWindowLayout
      title="Dataniz"
      items={[
        {
          position: "Software Engineer",
          startDate: "January 2023",
          endDate: "May 2023",
        },
      ]}
      image="/img/dataniz.png"
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
    </FrostedWindowLayout>
  );
}
