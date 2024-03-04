import { Card } from "react-bootstrap";
import { styled } from "styled-components";

export const CardStyled = styled(Card)`
  background-color: #6A3E7F;
  min-width: 10vh;
  margin-top: 40px;
  width: 100%;
  order-radius: 4px;
  &:hover {
    transform: scale(1.05);
    p {
      color: #fff;
    }
  }

  @media (min-width: 1200px){
      width: 22rem;
      height: 550px;
      margin-top: -130px;
    }

    a{
      background: rgba(255, 255, 255, 0.2);
      padding: 15px 30px 15px 30px;
      color: #fff;
      border-radius: 50px;
      transition: all ease-in-out 0.4s;
      &:hover{
        background-color: #fff;
        color: #1977cc;
      }
      i {
        margin-left: 10px;
      }
    }
`;

export const CardTitleStyled = styled.h3`
    font-weight: 700 !important;
    font-size: 34px;
    margin-bottom: 30px;
    color: #fff;
`;

export const CardTextStyled = styled(Card.Text)`
  margin-bottom: 30px;
  font-size: 17px !important;
  text-align: center;
  color: #fff !important;
`;

export const SimpleCardStyled = styled(Card)`
  width: 100%;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  background: #fff;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;

   @media (min-width: 1200px){
      width: 11rem;
      height: 550px;
      margin-top: -130px;
      margin-left: 20px;
    }
  
`;

export const SimpleCardTitleStyled = styled.h6`
  color: #444444 !important;
  font-size: 1.1rem !important;
  padding-top: 15px;
`;

export const SimpleCardTextStyled = styled.h6`
  color: #848484 !important;
  font-size: 17px !important;
  padding-top: 20px;
  line-height: 1.5; 
`;


export const GeneralCardStyled = styled.div`
    max-width: 80%;

    @media (min-width: 1200px){
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
`;

export const IconStyled = styled.i `
    outline: none;
    text-decoration: none;
    padding: 2px 1px 0;
    font-size: 200px;
    color: rgb(106, 62, 127);
    margin: 20px 10px 20px 10px;

`;
