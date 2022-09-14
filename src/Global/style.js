import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    text-decoration: none;
  }
  `;

  export const Menu = styled.div`
    position: absolute;
    top: 0;
    background-color: aqua;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      width: 70%;
      display: flex;
      justify-content: space-evenly;
    }
    li{
      font-size: 1.5rem;
      text-decoration: none;
    }
    Link{
      text-decoration: none;
    }
    `

export const Container = styled.section`
position: relative;
width:100vw;
height:150vh;
background-color: #999;
display: flex;
justify-content:center;
align-items:center;
justify-content: space-around;
flex-wrap: wrap;
`
  