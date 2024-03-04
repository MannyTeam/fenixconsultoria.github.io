import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const SectionTitle = styled.div`
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

export const CardUploadImg = styled(Card.Img)`

    margin: 20px auto;
    cursor: pointer;
`;
