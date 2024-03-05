import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ContainerStyled = styled(Container)`
    position: relative;
`;

export const HomePageStyled = styled.div`
    background-color: #fff;
    p{
        font-size: 20px;
        margin-bottom: 60px;
        color: #fff;
    }

    h3{
        font-size: 30px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        margin-bottom:40px;
    }

    h6 {
        font-size: 28px;
        color: #fff;
        margin: auto;
        
    }

`;

export const ImageContainer = styled.div<MainImageStyled>`
    margin-top: 132px;
    height: 400px;
    min-width: 10vh;
    background: url(${(props)=>props.url}) center/cover;
    position: relative;

    @media (max-width: 768px)
    {
        margin-top: 0px;
        min-width: 10vh;
    }
`;

type MainImageStyled = {
    url?: string;
};


export const SimpleCardContainer = styled.div`
  @media (min-width: 1200px){
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const TextImgContainer = styled.div`
    position: absolute;
    top: 30%;
`;