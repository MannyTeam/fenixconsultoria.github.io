import styled from "styled-components";
import { Card, Image } from "react-bootstrap";
import {MDBBtn} from 'mdb-react-ui-kit';

export const AboutUsStyled = styled.div`
    background-color: #fff;

    p {
        font-size: 17px;
        font-family: "Open Sans", sans-serif;
        margin-right: 10px;
        margin-left: 10px;
        color: #000;
    }

    @media (max-width: 768px)
    {
        margin-top: 60px;
        min-width: 10vh;
    }
`;

export const CardStyled = styled(Card)`
    margin-top: 68px;

    @media (min-width: 768px)
    {
        margin-top: 132px;
        min-width: 10vh;
    }
`;

export const IframeStyled = styled.iframe`
    border-radius: 12px;
    width: 460px;
    height: 185px;

    @media (max-width: 768px)
    {
        width: auto;
        height: auto;
        margin-bottom: 30px;
    }
`;

export const CardHeaderStyled = styled(Card.Header)`
    text-align: center;
    color: #2b4a63;
   
`;

export const CardTitleStyled = styled(Card.Title)`
    text-align: center;
    color: #2b4a63;
    font-weight: bold;


    h1 {
        font-weight: bold;
        text-align: center;
        color: #2b4a63;
    }
`;

export const CardOwnerStyled = styled(Card)`
    margin-top: 80px;
`;

export const ImageSyled = styled(Image)`
    border-radius: 60%;
    height: 280px;
    width: 200px;
    margin: 10px 0px 10px 0px;
`;

export const ButtonIconStyled = styled(MDBBtn)`
    max-width: 116.75px;
    max-height: 31.34px;
`;
