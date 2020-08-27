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
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
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
        >
          <Typography align="center" className={classes.title}>
            ABOUT ME
          </Typography>
          <Avatar src={profile} alt="founder" className={classes.avatar} />
          <Typography className={classes.name}>Ahmed Laadraoui</Typography>
          <Typography className={classes.content}>
            PYTHON | NODE JS | REACT JS
          </Typography>
          <Typography
            align="center"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            Hi there! I am an aeronautical engineer. You will ask me what am I
            doing here ? I will tell you that I have studied more computer
            programming and development than mechanics throughout my entire
            mechanical career. To get there, I only followed my passions which
            is mathematics and programming.
          </Typography>
          <Typography
            align="center"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            I started by coding my trading strategies, because yes I am also a
            trader, then after having met the champion{" "}
            <span style={{ fontWeight: 700, fontFamily: "Alata, sans-serif" }}>
              Mostafa Belkhayat
            </span>{" "}
            I started coding his own winning strategies which became trading
            robots. Which gave me more confidence. This area has increased my
            analytical skills which helps me enormously in complex projects
            often in data science
          </Typography>
          <Typography
            align="center"
            style={{ marginTop: "2em" }}
            className={classes.content}
            paragraph
          >
            I started Web development with django and flask, because I was
            PYTHON fanatic :p. <br />I needed the web development to prototype
            my ideas and make them real. I was finally convinced by the nodejs
            frameworks whether in frontend or backend. what plunged me into the
            world of JavaScript which made me even more fanatic and passionate
            than ever.
          </Typography>
          <Typography
            align="center"
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
