import { Card } from "react-bootstrap";
import styled from "styled-components";

export const GeneralStyled =  styled.div`

    margin-top: 80px;

    @media (min-width: 768px)
    {
        margin-top: 132px;
        min-width: 10vh;
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

export const CentralCard = styled(Card)`
    background: linear-gradient(to right, #6A3E7F, white);
    padding: 15px 15px 15px 15px;
    border-radius: 20px;
    @media (min-width: 768px)
    {
      margin: 138px 160px 60px 60px;
    }
`;

export const ProceduresList = styled.ul`
  li {
    padding-bottom: 10px;
  }
`;

