import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import { Menu, Container } from "../../Global/style";
import { BoxDog, BoxCard, Botao } from "./style";



export default function DogDogPage() {

  const [dog1, setDog1] = useState()
  const [dog2, setDog2] = useState()
  const [dog3, setDog3] = useState()

  const [status, setStatus] = useState()

const API = 'https://dog.ceo/api/breeds/image/random'
 
function getDog(){
    axios.get(API).then((response)=>{
      setDog1(response.data.message)
      setStatus(true)
    })
    
    axios.get(API).then((response)=>{    
      setDog2(response.data.message)
      setStatus(true)
    })

    axios.get(API).then((response)=>{    
      setDog3(response.data.message)
      setStatus(true)
    })
}

  return (
    <Container>
      <Menu>
          <ul>
            <li><Link to="/"><p>Home</p></Link></li>
            <li><Link to="/dogpage"><p>Dog Page</p></Link></li>
          </ul>
        </Menu> 
      <Botao>
            <button onClick={() =>{getDog()}}><span>Next</span></button>   

      </Botao>
      <BoxCard>        
        <BoxDog>
          <h1>Dog one</h1>
          <h2>Clique em next para ver o DOG 1</h2>
          {status && <img src={dog1} alt='Foto de doguinho' />}
          </BoxDog>
        <BoxDog>
          <h1>Dog two</h1>
          <h2>Clique em next para ver o DOG 2</h2>
          {status && <img src={dog2} alt='Foto de doguinho' />}
        </BoxDog>
        <BoxDog>
          <h1>Dog three</h1>
          <h2>Clique em next para ver o DOG 2</h2>
           {status && <img src={dog3} alt='Foto de doguinho' />}
        </BoxDog>
      </BoxCard>
    </Container>
  );
}
