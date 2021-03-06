import React from "react";
import Section from "../../../common/section";
import Avatar from "@material-ui/core/Avatar";

import profile from "../../../assets/Ahmed-pdp.jpeg";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles((theme) => ({
  title: {
    ...theme.typography.hero,
    color: "black",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  name: {
    fontSize: "2rem",
    color: "black",
    fontWeight: 400,
    fontFamily: "Alata, sans-serif",
  },
  content: {
    fontSize: "1.1rem",
    color: "#686868",
    fontWeight: 400,
    fontFamily: "arial",
  },
  avatar: {
    height: "15em",
    width: "15em",
    [theme.breakpoints.down("sm")]: {
      height: "10em",
      width: "10em",
      maxHeight: 300,
      maxWidth: 300,
      margin: "2em",
    },
  },
  aboutContainer: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "2em",
      marginLeft: "2em",
    },
  },
}));
const About = ({ id, index, background }) => {
  const classes = useStyle();

  return (
    <Section id={id} index={index} background={background}>
      <Grid container justify="center">
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          style={{ maxWidth: "45em" }}
          className={classes.aboutContainer}
        >
          <Typography align="center" className={classes.title}>
            ABOUT ME
          </Typography>
          <Avatar src={profile} alt="founder" className={classes.avatar} />
          <Typography align="center" className={classes.name}>
            Ahmed Laadraoui
          </Typography>
          <Typography align="center" className={classes.content}>
            PYTHON | NODE JS | REACT JS
          </Typography>
          <Typography
            align="justify"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            Hi there! I am an aeronautical engineer. You might ask me what am I
            doing here ? Let me tell you this : I’ve studied more computer
            programming and web development than mechanics throughout my entire
            mechanical career. To get here, I only followed my passions :
            Mathematics and Programming.
          </Typography>
          <Typography
            align="justify"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            I started by coding my trading strategies, because, yes I am also a
            trader. Then after having met the champion{" "}
            <span style={{ fontWeight: 700, fontFamily: "Alata, sans-serif" }}>
              Mostafa Belkhayat
            </span>
            , I started coding his own winning strategies that later became
            trading robots ; which gave me more confidence. This area has
            developed my analytical skills ; and THAT helps me tremendously in
            complex projects, often, in data science.
          </Typography>
          <Typography
            align="justify"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            I started Web development with django and flask, because I was a
            PYTHON fanatic :p. <br />I needed the web development to prototype
            my ideas and make them real. I was finally convinced by the Nodejs
            frameworks whether in frontend or backend, which drove me into the
            world of JavaScript and made me even more passionate than ever.
          </Typography>
          <Typography
            align="justify"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            This combo has made me a Full-stack developer, who can integrate the
            advantage of the Python language and its incredible libraries at the
            service of the NodeJS APIs and ReactJS interfaces.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;
