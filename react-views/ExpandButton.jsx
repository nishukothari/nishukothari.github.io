import React from "react";

class ExpandButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "+",
      projectKey: this.props.projectKey,
    };

    this.switchText = this.switchText.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.projectKey !== nextProps.projectKey) {
      this.setState(
        {
          projectKey: nextProps.projectKey,
        },
        () => {
          if (nextProps.open) {
            this.setState({
              buttonText: "–",
            });
            document.getElementById(this.state.projectKey).style.display =
              "table-cell";
            this.props.addToSet(this.state.projectKey);
          } else {
            this.setState({
              buttonText: "+",
            });
            document.getElementById(this.state.projectKey).style.display =
              "none";
            this.props.removeFromSet(this.state.projectKey);
          }
        }
      );
    }
  }

  switchText() {
    if (this.state.buttonText == "+") {
      this.setState({
        buttonText: "–",
      });
      document.getElementById(this.state.projectKey).style.display =
        "table-cell";
      this.props.addToSet(this.state.projectKey);
    } else {
      this.setState({
        buttonText: "+",
      });
      document.getElementById(this.state.projectKey).style.display = "none";
      this.props.removeFromSet(this.state.projectKey);
    }
  }

  render() {
    return <button onClick={this.switchText}> {this.state.buttonText} </button>;
  }
}

export default ExpandButton;
