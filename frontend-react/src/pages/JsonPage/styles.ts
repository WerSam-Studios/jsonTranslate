import styled from 'styled-components';

export const JsonViwer =styled.div`
width: 400px;
height: 500px;
border: none;
resize: none;
font-size: 15px;
color: Gray;
padding: 5px;
box-shadow: 5px 5px  #cecece;
background-color: white;
overflow:auto;
border-radius: 15px;
&::-webkit-scrollbar{
    border-radius: 15px ;
}
`;

export const JsonViwerPre =styled.pre`
width: 400px;
height: 500px;
border: none;
resize: none;
font-size: 15px;
color: Gray;
padding: 5px;
box-shadow: 5px 5px  #cecece;
border-radius: 15px;
background-color: white;
`;

export const Title = styled.text`
    font-size: 20px;
    align-content: start;
    color: White;
    font-family: Helvetica, sans-serif;
`;

export const JsonEditor =styled.textarea`
    width: 400px;
    height: 500px;
    border: none;
    resize: none;
    font-size: 15px;
    color: Gray;
    padding: 5px;
    box-shadow: 5px 5px #cecece;
    border-radius: 15px;
    &::-webkit-scrollbar{
        border-radius: 15px ;
    }
`;

export const Button = styled.button`
    width: 150px;
    border: none;
    font-size: 25px;
    background-color: #3498db;
    
    color: white;
    border-radius: 10px 10px 10px 10px;
    font-family: inherit;
    transition: border-radius 0.7s, box-shadow 2s, padding 0.5s, font-family 1s;
    padding: 5px;
    &:hover{
        
        box-shadow: 5px 5px 150px white;
        padding: 10px;
        font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`;

export const ContainerViwer = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
height: 600px;

`;

export const ContainerButton = styled.div`
margin: auto;
margin-top: 350px;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
height: 600px;
justify-content: space-between;

`;