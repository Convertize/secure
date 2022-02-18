import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaAngleDown } from "react-icons/fa";

export default class LangSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          {this.props.lang === "br" ? (
            <img className="flag-icon" src={this.props.br_flag} />
          ) : (
            <img className="flag-icon" src={this.props.us_flag} />
          )}
        </DropdownToggle>
        <FaAngleDown onClick={this.toggle} className="arrow-icon" />
        <DropdownMenu>
          <DropdownItem onClick={this.props.handleBr}>
            <span className='d-item'>
              <img className="flag-icon" src={this.props.br_flag} />
              <b className='pl-1-4 font-size-13'>PT-BR</b>
            </span>
          </DropdownItem>
          <DropdownItem onClick={this.props.handleUs}>
            <span className='d-item'>
              <img className="flag-icon" src={this.props.us_flag} />
              <b className='pl-1-4 font-size-13'>ENG</b>
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
