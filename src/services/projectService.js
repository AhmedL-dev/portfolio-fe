import arcdev1 from "../assets/portfolio/arcdev1.PNG";
import movily from "../assets/portfolio/movily.PNG";
import upface from "../assets/portfolio/upface.PNG";

const projects = [
  {
    title: "arcdev",
    body: "React.js | Firebase | Material-ui ",
    image: arcdev1,
  },
  {
    title: "movily",
    body: "Node.js | React.js | Bootstrap | Mongodb",
    image: movily,
  },
  { title: "upface", body: "React.js | Django | MySQL", image: upface },
];

const getProjects = () => {
  const data = [...projects];
  return data;
};

export default {
  getProjects,
};
