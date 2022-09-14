import React from "react";
import { Link } from "react-router-dom";

import { Menu, Container } from "../../Global/style";
import { Box } from "./style";
//import { Container } from "./style";

export default function Home() {
  return (
    <Container>
        <Menu>
          <ul>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><Link to="/dogpage"><p>Dog Page</p></Link></li>
          </ul>
        </Menu>

        <Box>
          <fieldset>
            <legend>Desafio</legend>
            <h1>Espeço reservado para o próximo desafio</h1>
          </fieldset>
        </Box>     
    </Container>
  );
}
