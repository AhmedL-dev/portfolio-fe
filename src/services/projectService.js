import arcdevHome from "../assets/portfolio/arcdev1-home.PNG";
import arcdevMobile from "../assets/portfolio/arcdev1-mobile.PNG";
import arcdevContact from "../assets/portfolio/arcdev2-contact.PNG";
import arcdevEstimate from "../assets/portfolio/arcdev3-estimate.PNG";
import arcdevEstimateResult from "../assets/portfolio/arcdev4-estimate.PNG";
import movily from "../assets/portfolio/movily1.PNG";
import movilyForm from "../assets/portfolio/movily2-form.PNG";
import movilyLogin from "../assets/portfolio/movily3-login.PNG";

const projects = [
  {
    title: "Arc Development",
    body: "React.js | Firebase | Material-ui ",
    image: arcdevHome,
    github: ["https://github.com/AhmedL-dev/arcdev"],
    liveLink: ["https://arcsoftwaredevelopment.com/"],
    detail: [
      {
        type: "string",
        content:
          "Arc Development is a softwar, mobile app and website developpment agency that provides latest technologies for best user experience.",
      },
      {
        type: "image",
        content: arcdevHome,
      },
      {
        type: "image",
        content: arcdevMobile,
        width: 300,
      },
      {
        type: "string",
        content:
          "the website is developped by React.js as frontend and Material-ui for styling. Some services such as emailing was done using firebase.",
      },
      {
        type: "image",
        content: arcdevContact,
      },
      {
        type: "string",
        content:
          "One of the creative features in this website is the estimate page.",
      },
      {
        type: "image",
        content: arcdevEstimate,
      },
      {
        type: "string",
        content:
          "Here, the client can automaticaly calculate an estimation of his expected services at the agence, just by answering some clicky questions.",
      },
      {
        type: "image",
        content: arcdevEstimateResult,
      },
      {
        type: "string",
        content:
          "The plateforme is realy responsive to all types of screens and never break. This is a hight fidelity Design.",
      },
    ],
  },
  {
    title: "Movily",
    body: "Node.js | React.js | Bootstrap | Mongodb",
    image: movily,
    github: [
      "https://github.com/AhmedL-dev/movily-backend",
      "https://github.com/AhmedL-dev/movily-frontend",
    ],
    liveLink: ["https://movily-sbignzi.netlify.app/"],
    detail: [
      {
        type: "string",
        content:
          "Movily is a movies showcase application especialy for rentals.",
      },
      {
        type: "image",
        content: movily,
      },
      {
        type: "image",
        content: movilyLogin,
      },
      {
        type: "string",
        content:
          "This app contain a full crud in adition to authentification and authorisations. It's frontend is developped in React.js and styled with Bootstrap 4. The backend is developped by the amazing Express.js Framework with a MongoDB database, witch complete our MERN stack app.",
      },
      {
        type: "image",
        content: movilyForm,
      },
      {
        type: "string",
        content:
          "Movily is a complete application that can be used as skeleton or base of any complex app.",
      },
    ],
  },
  // {
  //   title: "upface",
  //   body: "React.js | Django | MySQL",
  //   image: upface,
  //   github: ["https://github.com/AhmedL-dev/Upface_front_react"],
  //   detail: [],
  // },
];

const getProjects = () => {
  return projects;
};

export default {
  getProjects,
};
