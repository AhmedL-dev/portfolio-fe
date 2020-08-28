import arcdev1 from "../assets/portfolio/arcdev1.PNG";
import arcdev2 from "../assets/portfolio/arcdev2.PNG";
import movily from "../assets/portfolio/movily.PNG";
import upface from "../assets/portfolio/upface.PNG";

const projects = [
  {
    title: "arcdev",
    body: "React.js | Firebase | Material-ui ",
    image: arcdev1,
    github: ["https://github.com/AhmedL-dev/arcdev"],
    detail: [
      {
        type: "image",
        content: arcdev1,
      },
      {
        type: "string",
        content: "Hello there, my name is ahmed yoo man",
      },
      {
        type: "image",
        content: arcdev2,
      },
      {
        type: "string",
        content: "Heyyyyy yoooo",
      },
    ],
  },
  {
    title: "movily",
    body: "Node.js | React.js | Bootstrap | Mongodb",
    image: movily,
    github: [
      "https://github.com/AhmedL-dev/movily-backend",
      "https://github.com/AhmedL-dev/movily-frontend",
    ],
    detail: [],
  },
  {
    title: "upface",
    body: "React.js | Django | MySQL",
    image: upface,
    github: ["https://github.com/AhmedL-dev/Upface_front_react"],
    detail: [],
  },
];

const getProjects = () => {
  return projects;
};

export default {
  getProjects,
};
