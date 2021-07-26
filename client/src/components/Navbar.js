import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import logo from "../logo.svg";

const Navbar = () => {
  const history = useHistory();

  return (
    <Menu secondary>
      <Container>
        <Menu.Item name="home" onClick={() => history.push("/")}>
          <img src={logo} alt="React Tasks" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="new-task" onClick={() => history.push("/new-task")}>
            New Task
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;
