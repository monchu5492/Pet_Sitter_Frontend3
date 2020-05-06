import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: null };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (name === "logout") {
      localStorage.clear();
      this.props.logout();
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        {this.props.user.name ? (
          <Menu.Item
            as={NavLink}
            to="/about"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
        ) : null}
        {this.props.user.name ? (
          <Menu.Item
            as={NavLink}
            to="/profile"
            name="my profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
        ) : null}
        <Menu.Menu position="right">
          {!this.props.user.name ? (
            <Menu.Item
              as={NavLink}
              to="/login"
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          ) : null}
          {this.props.user.name ? null : (
            <Menu.Item
              as={NavLink}
              to="/signup"
              name="sign up"
              active={activeItem === "sign up"}
              onClick={this.handleItemClick}
            />
          )}
          {this.props.user.name ? (
            <Menu.Item
              as={NavLink}
              to="/"
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          ) : null}
        </Menu.Menu>
      </Menu>
    );
  }
}
