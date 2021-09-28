import React from "react";

import "../public/styles/MasterView.css";

import HomeView from "./HomeView";
import ProjectView from "./ProjectView";

import { Navbar, NavLink } from "react-bootstrap";

class MasterView extends React.Component {
  constructor(props) {
    super(props);

    let current = -1;
    switch (window.location.hash) {
      case "#projects":
        current = 1;
        break;
      default:
        current = 0;
        break;
    }

    this.state = {
      currentTab: current,
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(argument) {
    if (argument != this.state.currentTab) {
      this.setState({
        currentTab: argument,
      });
    }
  }

  render() {
    let views = new Map();
    views.set(0, <HomeView />);
    views.set(1, <ProjectView />);
    return (
      <div className="FullSite">
        <Navbar className="DesktopNav">
          <NavLink href="#home" onClick={() => this.changeView(0)}>
            Home
          </NavLink>
          <NavLink href="#projects" onClick={() => this.changeView(1)}>
            Projects
          </NavLink>
          <NavLink href="#home"  onClick={() => window.open("docs/Nishant_Kothari_Resume.pdf")}>
            Resume
          </NavLink>
        </Navbar>
        {views.get(this.state.currentTab)}
      </div>
    );
  }
}

export default MasterView;
