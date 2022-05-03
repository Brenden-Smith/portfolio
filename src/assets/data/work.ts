import { ReactComponent as ReactSvg } from "../svg/react.svg";
import { ReactComponent as JSSvg } from "../svg/js.svg";
import { ReactComponent as GoogleSvg } from "../svg/google.svg";
import { ReactComponent as JavaSvg } from "../svg/java.svg";

const work = [
  {
    title: "Goldman Sachs",
    position: "Engineering Summer Analyst",
    time: "June 2022 - August 2022",
    description: [
      "Incoming Engineering Summer Analyst in the Global Markets division",
    ],
    image: require("../../assets/img/goldman.png"),
    stack: [
      {
        name: "Java",
        icon: JavaSvg,
      },
    ],
  },
  {
    title: "Handle",
    position: "Junior Software Engineer",
    time: "January 2022 - April 2022",
    description: [
      "Back-End Software Engineer at Handle Delivery, a startup that provides delivery services for snacks, drinks, and more for college students",
      "Developed serverless Node JS cloud functions to optimize application performance, manage the database, and for analytics",
      "Worked on the shop administrator panel to provide fine-tuned control over storefronts, users, and store analytics",
    ],
    image: require("../../assets/img/handle.jpg"),
    stack: [
      {
        name: "React",
        icon: ReactSvg,
      },
      {
        name: "JavaScript/TypeScript",
        icon: JSSvg,
      },
      {
        name: "Google Cloud",
        icon: GoogleSvg,
      },
    ],
  },
  {
    title: "Down",
    position: "Lead Back-End Software Engineer",
    time: "December 2021 - January 2022",
    description: [
      "Led the back-end development team for the Down application during the beta development phase (Winter 2021).",
      "Designed scalable and cost-efficient back-end services, including cloud functions, user authentication, databases, cloud storage, and other proprietary APIs.",
      "Collaborated with the front-end team to integrate back-end services with the front-end.",
      "Reviewed and approved pull requests for all teams in the second development phase alongside the Chief Technical Officer.",
    ],
    image: require("../../assets/img/down.jpg"),
    stack: [
      {
        name: "React",
        icon: ReactSvg,
      },
      {
        name: "JavaScript/TypeScript",
        icon: JSSvg,
      },
      {
        name: "Google Cloud",
        icon: GoogleSvg,
      },
    ],
  },
];

export default work;
