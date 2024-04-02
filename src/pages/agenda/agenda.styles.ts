import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const SectionTitleStyled = styled.div`
    text-align: center;
    padding-bottom: 30px;
    h2 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
        padding-bottom: 20px;
        position: relative;
        color: #2c4964;
    } 
    p {
        color: #000;
    }
`;

export const CardEventImg = styled(Card)`
    width: 100%;
    height: 500px;
    margin: 20px auto;
    cursor: pointer;
`;

export const CardImgStyled = styled(Card.Img)`
    width: 80%;
    height: 80%;
    object-fit: fill;
    margin: 0 auto;
    margin-top: 20px;
`;
