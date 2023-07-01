import Button from "components/Button";
import { DarkCard } from "components/DarkCard";
import { FrostedWindowLayout } from "components/FrostedWindowLayout";
import { Icon } from "components/Icon";
import siteMetadata from "metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...siteMetadata,
  title: "Brenden Smith | Video Sync",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FrostedWindowLayout
        title="Video Sync"
        items={[
          {
            position: "Personal Project",
            startDate: "January 2022",
            endDate: "Present",
          },
        ]}
        image="/img/video.png"
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
          <p>
            Video Sync is a personal project that I created so that I could
            watch online videos simultaneously with my friends. I was inspired
            to create this project because I wasn{`'`}t happy with the existing
            solutions. I wanted to create a solution that was easy to use, had a
            clean interface, and was free. I created the front-end using
            React/Next.js and the back end using Firebase and Google Cloud.
          </p>

          <p>Check out the application and the repository below!</p>
        </DarkCard>
        <DarkCard title="More">
          <div className="space-x-5">
            <Button href="https://videosync.brenden-smith.com">
              Application
            </Button>

            <Button href="https://github.com/Brenden-Smith/video-sync">
              Repository
            </Button>
          </div>
        </DarkCard>
      </FrostedWindowLayout>
    </div>
  );
}
