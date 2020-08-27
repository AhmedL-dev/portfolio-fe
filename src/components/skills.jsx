import React from "react";
import Section from "../common/section";

import aws from "../assets/aws.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import django from "../assets/django.png";
import express from "../assets/express.png";
import google from "../assets/google.png";
import heroku from "../assets/heroku.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import material from "../assets/material.png";
import mongo from "../assets/mongo.png";
import mysql from "../assets/mysql.svg";
import node from "../assets/node.png";
import npm from "../assets/npm.png";
import react from "../assets/react.png";

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
    fontSize: "2rem",
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

const frontEnd = [
  { img: html, alt: "html" },
  { img: css, alt: "css" },
  { img: javascript, alt: "javascript" },
  { img: react, alt: "react" },
  { img: material, alt: "material-ui" },
  { img: bootstrap, alt: "bootstrap" },
];

const backEnd = [
  { img: node, alt: "node" },
  { img: express, alt: "css" },
  { img: npm, alt: "javascript" },
  { img: django, alt: "django" },
];

const db = [
  { img: mongo, alt: "mongo" },
  { img: mysql, alt: "mysql" },
];

const cloud = [
  { img: heroku, alt: "heroku" },
  { img: google, alt: "google" },
  { img: aws, alt: "aws" },
];

const Skills = () => {
  const classes = useStyle();

  return (
    <Section id="skills" index={1} background="#F0F0F0">
      <React.Fragment>
        <Grid container justify="center">
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            style={{ maxWidth: "90%" }}
          >
            <Grid item>
              <Typography align="center" className={classes.title}>
                MY SKILLS
              </Typography>
            </Grid>

            <Grid item style={{ marginTop: "4em", marginBottom: "4em" }}>
              <Typography align="center" className={classes.content}>
                FRONT-END
              </Typography>
            </Grid>
            <Grid item container justify="space-evenly" alignItems="center">
              {frontEnd.map((fe) => (
                <Grid key={fe.alt} item>
                  <img src={fe.img} alt={fe.alt} style={{ maxWidth: 100 }} />
                </Grid>
              ))}
            </Grid>
            {/*  BACK END BLOCK */}
            <Grid item style={{ marginTop: "6em", marginBottom: "6em" }}>
              <Typography align="center" className={classes.content}>
                BACK-END
              </Typography>
            </Grid>
            <Grid item container justify="space-evenly" alignItems="center">
              {backEnd.map((fe) => (
                <Grid key={fe.alt} item>
                  <img src={fe.img} alt={fe.alt} style={{ maxWidth: 100 }} />
                </Grid>
              ))}
            </Grid>
            {/*  DATABASE BLOCK */}
            <Grid item style={{ marginTop: "4em", marginBottom: "4em" }}>
              <Typography align="center" className={classes.content}>
                DATABASES
              </Typography>
            </Grid>
            <Grid item container justify="space-evenly" alignItems="center">
              {db.map((fe) => (
                <Grid key={fe.alt} item>
                  <img src={fe.img} alt={fe.alt} style={{ maxWidth: 100 }} />
                </Grid>
              ))}
            </Grid>
            {/*  BACK END BLOCK */}
            <Grid item style={{ marginTop: "4em", marginBottom: "4em" }}>
              <Typography align="center" className={classes.content}>
                CLOUD
              </Typography>
            </Grid>
            <Grid item container justify="space-evenly" alignItems="center">
              {cloud.map((fe) => (
                <Grid key={fe.alt} item>
                  <img src={fe.img} alt={fe.alt} style={{ maxWidth: 100 }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    </Section>
  );
};

export default Skills;
