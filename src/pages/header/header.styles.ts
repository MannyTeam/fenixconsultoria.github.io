import { Container } from "react-bootstrap";
import styled from "styled-components";

export const HeaderContainer = styled(Container)`
    background-color: white;
    max-width: 1112px;
    z-index: 1000;
    position: fixed;
    left: 50%;
    top: -5px;
    transform: translateX(-50%); 
    margin-bottom: 20px;
`;
