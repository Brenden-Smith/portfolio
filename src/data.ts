import { ReactComponent as ReactSvg } from "./assets/svg/react.svg";
import { ReactComponent as JSSvg } from "./assets/svg/js.svg";
import { ReactComponent as GoogleSvg } from "./assets/svg/google.svg";
import { ReactComponent as FlutterSvg } from "./assets/svg/flutter.svg";
import { ReactComponent as JavaSvg } from "./assets/svg/java.svg";


export const projects = [
  {
    title: "Video Sync",
    time: "January 2022 - Present",
    description: [
      "Video Sync is a web application designed to allow users to watch YouTube videos simultaneously with their friends.",
      "I am currently utilizing React, Firebase, Node.js, and Google Cloud to create this project. You can view the project below!",
    ],
    image: require("./assets/img/video.jpg"),
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
    links: [
      {
        title: "View Website",
        link: "https://videosync.brenden-smith.com",
      },
    ],
  },
  {
    title: "Tyde Software",
    position: "Freelance Software Engineering",
    time: "April 2021 - Present",
    description: [
      "I am a co-founder and technical Lead for Tyde Software, a project I started with my partner to provide software solutions to small businesses.",
      "Completed one major project for a local business by developing a modern and sleek website with the React framework to improve their customer outreach.",
    ],
    image: require("./assets/img/tyde.png"),
    links: [
      {
        title: "View Website",
        link: "https://tydesoftware.com",
      },
    ],
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
    title: "Gro",
    position: "BeachHacks 2021 Participant",
    image: require("./assets/img/gro.png"),
    time: "April 2021",
    description: [
      "Gro is an application designed to help users care for their plants by providing them with reminders and a journal for each plant",
      "I built the back-end aspects of this application, such as user authentication and cloud storage, using Firebase. I also implemented the trefle.io API to use as the plant database, and I worked on various front-end aspects with Flutter.",
    ],
    links: [
      {
        title: "View Repository",
        link: "https://github.com/Brenden-Smith/Gro",
      },
    ],
    stack: [
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Google Cloud",
        icon: GoogleSvg,
      },
    ],
  },
  {
    title: "Hermes",
    position: "Google Solution Challenge 2021",
    image: require("./assets/img/hermes.png"),
    time: "January 2021 - March 2021",
    description: [
      "Hermes is an application that connects students in need of resources to donors willing to provide those resources",
      "I worked in a team of four to design this for the Google DSC Solution Challenge 2021. We primarily used Flutter to design the front-end, and Firebase to do the back-end. I specifically worked on the visual aspects of the home view and profile view.",
    ],
    links: [
      {
        title: "View Repository",
        link: "https://github.com/danieljo09/Hermes",
      },
    ],
    stack: [
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Google Cloud",
        icon: GoogleSvg,
      },
    ],
  },
  {
    title: "Journey",
    position: "MarinaHacks 2021 Winner - Mental Health",
    image: require("./assets/img/journey.png"),
    time: "March 2021",
    description: [
      "Journey is an application designed to help users keep track of their moods and thoughts",
      "I worked in a team of four to design this for MarinaHacks 2021. We designed this app with Flutter, Dart, YouTube API, and Zen Quotes API. Specifically, I did both front and back-end work on this project, including implementing the quotes API and working with the data structures.",
    ],
    links: [
      {
        title: "View Repository",
        link: "https://github.com/Brenden-Smith/Journey",
      },
    ],
    stack: [
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
    ],
  },
];

export const work = [
  {
    title: "Goldman Sachs",
    position: "Engineering Summer Analyst",
    time: "June 2022 - August 2022",
    description: [
      "Incoming Engineering Summer Analyst in the Global Markets division",
    ],
    image: require("./assets/img/goldman.png"),
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
    image: require("./assets/img/handle.jpg"),
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
    image: require("./assets/img/down.jpg"),
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

export const info = {
  about: [
    {
      text: "Senior Computer Science Student at",
      bold: "California State University, Long Beach",
    },
    {
      text: "Incoming Engineering Summer Analyst at",
      bold: "Goldman Sachs",
    },
    {
      text: "President at the",
      bold: "Association for Computing Machinery",
    },
    {
      text: "Scholar at",
      bold: "STEM Advantage",
    },
    {
      text: "I am a software engineer with a passion for creating beautiful, intuitive, and user-friendly applications.",
      bold: "",
    },
  ],
  languages: [
    {
      name: "C++",
      value: 60,
    },
    {
      name: "CSS",
      value: 90,
    },
    {
      name: "HTML",
      value: 90,
    },
    {
      name: "Java",
      value: 70,
    },
    {
      name: "JavaScript",
      value: 90,
    },
    {
      name: "Python",
      value: 80,
    },
    {
      name: "Swift",
      value: 40,
    },
    {
      name: "TypeScript",
      value: 95,
    },
  ],
  frameworks: [
    {
      name: "Flutter",
      value: 65,
    },
    {
      name: "Firebase",
      value: 95,
    },
    {
      name: "Google Cloud",
      value: 80,
    },
    {
      name: "Node.js",
      value: 70,
    },
    {
      name: "React",
      value: 95,
    },
    {
      name: "React Native",
      value: 90,
    }
  ],
};