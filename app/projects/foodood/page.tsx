import Button from "components/Button";
import { DarkCard } from "components/DarkCard";
import { Icon } from "components/Icon";
import PageLayout from "components/PageLayout";
import siteMetadata from "metadata";
import { Metadata } from "next";
import foodood from "public/img/foodood.png";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | FooDood",
};

export default function Page() {
  return (
    <PageLayout
      title="FooDood"
      items={[
        {
          position: "CSULB Senior Project",
          startDate: "August 2022",
          endDate: "May 2023",
        },
      ]}
      image={foodood}
      imageColor="black"
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
          src="/icon/react.svg"
          size="medium"
          alt="React Native"
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
        <p>
          FooDood is a mobile application that combines the concept of
          Tinder-swiping with selecting something to eat. Science says that it
          is easier to make a decision when presented with simple options such
          as {'"'}yes{'"'} or {'"'}no{'"'} rather than a large list of options.
          FooDood will present users with a list of food options in their area
          and they will be able to swipe left or right on the options to decide
          what to eat.
        </p>

        <p>
          I worked on this project with a team of 3 other students. I developed
          the back end of the application primarily, including the
          recommendation algorithm, data fetching, and cloud resources. On the
          front end, I worked on performance optimizations and efficient data
          fetching.
        </p>

        <p>Check out the website and repository below!</p>
      </DarkCard>
      <DarkCard title="More">
        <div className="space-x-5">
          <Button href="https://www.foodood.dev">Website</Button>

          <Button href="https://github.com/Brenden-Smith/foodood">
            Repository
          </Button>
        </div>
      </DarkCard>
    </PageLayout>
  );
}
