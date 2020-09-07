import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";

import Form from "../../common/inputs/form";
import auth from "../../services/authService";

const classes = {
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
};

class ProjectForm extends Form {
  state = {
    data: {
      title: "",
      body: "",
      image: "",
      github: [],
      liveLink: [],
      detail: [],
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    body: Joi.string().required().label("Body"),
    image: Joi.string().required().label("Image"),
  };

  doSubmit = async () => {
    console.log("submit");
    // try {
    //   const response = await register(this.state.data);

    //   auth.loginWithJwt(response.headers["x-auth-token"]);
    //   window.location = "/";
    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const { message, key } = ex.response.data;
    //     const errors = { ...this.state.errors };
    //     errors[key] = message;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    // if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className={classes.root}>
        <div>
          {this.renderInput("title", "Title")}
          {this.renderInput("body", "Body")}
          {this.renderInput("image", "Image")}
          {this.renderButton("Save")}
        </div>
      </div>
    );
  }
}

export default ProjectForm;
