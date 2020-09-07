import React from "react";
import Joi from "joi-browser";

import Form from "../../common/inputs/form";
import auth from "../../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    const { username, password } = this.state.data;
    try {
      await auth.login(username, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/admin";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
        const { message, key } = ex.response.data;
        const errors = { ...this.state.errors };
        errors[key] = message;
        this.setState({ errors });
      }
    }
  };

  render() {
    // if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("login")}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
