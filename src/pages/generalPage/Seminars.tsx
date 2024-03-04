import React from "react";
import { Container } from "react-bootstrap";
import { GeneralStyled } from "./generalPage.styles";
import { GeneralCard } from "../../components/card/GeneralCard";
import { TEXT } from "../../constants/Constants";

export const Seminars = () => {
    return (
        <Container> 
            <GeneralStyled>
                <GeneralCard
                    icon='fa fa-book'
                    title='Tramites' 
                    text={TEXT}
                />
                <GeneralCard
                    icon='fa fa-tag'
                    title='Otros' 
                    text={TEXT}
                />
                <GeneralCard
                    icon='fa fa-university'
                    title='Otros' 
                    text={TEXT}
                />
                <GeneralCard
                    icon='fa fa-user'
                    title='Otros' 
                    text={TEXT}
                />
            </GeneralStyled>
        </Container>
        )
};