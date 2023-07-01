import { DarkCard } from "../components/DarkCard";
import { Icon } from "../components/Icon";

export default function Skills() {
  return (
    <DarkCard title="Skills">
      <div className="flex flex-row flex-wrap justify-center lg:justify-normal">
        <Icon src="/icon/aws.svg" size="large" alt="AWS" />
        <Icon src="/icon/c.svg" size="large" alt="C" />
        <Icon src="/icon/cpp.svg" size="large" alt="C++" />
        <Icon src="/icon/csharp.svg" size="large" alt="C#" />
        <Icon src="/icon/css.svg" size="large" alt="CSS" />
        <Icon src="/icon/docker.svg" size="large" alt="Docker" />
        <Icon src="/icon/html.svg" size="large" alt="HTML" />
        <Icon src="/icon/gcloud.svg" size="large" alt="Google Cloud" />
        <Icon src="/icon/java.svg" size="large" alt="Java" />
        <Icon src="/icon/javascript.svg" size="large" alt="JavaScript" />
        <Icon src="/icon/nodejs.svg" size="large" alt="Node.js" />
        <Icon src="/icon/react.svg" size="large" alt="React" />
        <Icon src="/icon/spring.svg" size="large" alt="Spring" />
        <Icon src="/icon/sql.svg" size="large" alt="SQL" />
        <Icon src="/icon/typescript.svg" size="large" alt="TypeScript" />
        <Icon src="/icon/python.svg" size="large" alt="Python" />
      </div>
    </DarkCard>
  );
}
