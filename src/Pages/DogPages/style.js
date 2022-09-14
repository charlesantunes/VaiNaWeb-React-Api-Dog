import styled from 'styled-components'

export const Container = styled.section`
position: relative;
background-color: #999;
width:100vw;
height:150vh;

`
export const Botao = styled.div`
position: absolute;
top: 10.6vh;
width: 100%;
display: flex;
justify-content: center;
height: 10vh;
border-radius: 15px;

    button { 
      background-color: #4CAF50;
      font-size: 28px;
      width: 200px;  
      margin: 5px;
      display: inline-block;
      padding: 15px;
      cursor: pointer;
      text-align: center;
      outline: none;
      color: #fff;
      border: none;
      border-radius: 15px;
      box-shadow: 0 9px #999;
    }
    button span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }
    button span:after {
      content: '>>';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -60px;
      transition: 0.5s;
    }
    button:hover {
      background-color: #3e8e41
    }
    button:hover span {
      padding-right: 35px;
    }
    button:hover span:after {
      opacity: 1;
      right: 0;
    }
    button:active {
      background-color: #3e8e41;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  `

export const BoxCard = styled.div`
position: absolute;
top: 22vh;
width: 100%;
height: auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
Img{
  width: 90%;  
  height: 30vh;
  margin-top: 50px;
  border-radius: 1em;
  object-fit: cover;
  display: flex;
  z-index: 2;
}
`
export const BoxDog = styled.div`
position: relative;
background-color: azure;
width: 450px;
height:40vh;
border: solid black;
border-radius: 2em;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
justify-content:space-evenly;

a:hover{
  text-decoration: none;
  color: red;
}
h1{
  font-size: 28px;
  position: absolute;
  top: 0;
  padding-top: 2vh;
}
h2{
  position: absolute;
  color: blue;
  font-size: 28px;
  display: flex;
  z-index: 1;
}

`
