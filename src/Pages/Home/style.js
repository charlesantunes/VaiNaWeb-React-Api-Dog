import styled from 'styled-components'

export const Container = styled.section`
width:100vw;
height:100vh;
background-color:gray;
display: flex;
justify-content:center;
align-items:center;
justify-content: space-around;
flex-wrap: wrap;
`

export const Box = styled.div`
    background-color: gray;
    width: 60%;
    height: 60vh;
    border-radius: 20px;
    
    fieldset{
        width: 90%;
        height: 55vh;
        margin: auto;
        border: solid 2px;
        border-radius: 20px;
    }
    fieldset legend{
        font-size: 2em;
        text-align: center;
    }
    h1{
        width: 100%;
        height: 100%;
        font-size: 1.6em;
        display: flex;
        justify-content: center;
        align-items: center;

        
    }
    @media(max-width:841px){
        h1{font-size: 1em;}
    }

`