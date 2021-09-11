import React from "react";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import "../public/styles/FilterDropdown.css";

class FilterDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: true,
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.cleared !== nextProps.cleared) {
      this.setState({
        key: nextProps.cleared,
      });
    }
  }

  render() {
    let dropdownHtml = [];
    for (let i = 0; i < this.props.items.length; ++i) {
      dropdownHtml.push(
        <DropdownItem
          onClick={() => {
            this.props.setFilter(this.props.items[i]);
          }}
        >
          {this.props.items[i]}
        </DropdownItem>
      );
    }

    return (
      <Dropdown className="Dropdown">
        <DropdownToggle className="DropdownButton" id={this.props.id}>
          {this.state.key ? this.props.defaultText : this.props.buttonText}
        </DropdownToggle>
        <DropdownMenu aria-labelledby={this.props.id}>
          {dropdownHtml}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default FilterDropdown;
